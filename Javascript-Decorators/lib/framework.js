import express from 'express';
const app = express();
const port = 3000;
const pathForControllers = new Map();
export function Controller(urlPath) {
  return function (target, context) {
    console.log(`@Controller - Registering a controller for path ${urlPath}`);
    pathForControllers.set(target, urlPath);
    return target;
  };
}
export function Get(subPath) {
  return function (target, context) {
    console.log(`@Get - Registering get handler for controller: ${target.constructor.name}`);
    context.addInitializer(function () {
      const controllerPath = pathForControllers.get(this.constructor);
      if (!controllerPath) {
        throw new Error(`Controller for type ${this.constructor.name} not registered`);
      }
      const fullPath = controllerPath + subPath;
      console.log(`@Get - Registering a handler for path: ${fullPath}`);
      app.get(fullPath, (req, res) => {
        const endPointResponse = target.call(this);
        res.json(endPointResponse);
      });
    });
    return target;
  };
}
export function startApp() {
  console.log('Starting App');
  for (const controller of pathForControllers.keys()) {
    const _ = new controller();
  }
  app.listen(port, () => {
    console.log('Listening on port 3000');
  });
}