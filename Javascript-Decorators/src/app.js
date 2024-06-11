// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// // Decorator function
// function retry(retryOptions) {
//   return function (target, context) {
//     console.log("Applying retry decorator");

//     const resultMethod = async function (...args) {
//       console.log('@retry - Running the retry decorator');
//       let lastError;

//       for (let attemptNum = 1; attemptNum <= retryOptions.maxRetryAttempts; attemptNum++) {
//         try {
//           console.log(`@retry - Attempt #${attemptNum}`);
//           return await target.apply(this, args);

//         }
//         catch (err) {
//           lastError = err;
//           if (attemptNum < retryOptions.maxRetryAttempts) {
//             console.log('@retry - Retrying..');
//             await sleep(retryOptions.delay);
//           }
//         }
//       }

//       throw lastError;
//     }
//     return resultMethod;
//   }
// }

// function log(target, context) {
//   const resultMethod = async function(...args) {
//     console.log(`@log - Running the ${context.name} method`);
//     try {
//       return await target.apply(this, args);
//     }
//     finally {
//       console.log(`@log - Method ${context.name} finished`);
//     }
//   }
//   return resultMethod;
// }

// class Metric {
//   constructor(name) {
//     this.name = name;
//   }

//   time() {
//     const metricThis = this;
//     return function (target, context) {
//       const resultMethod = async function(...args) {
//         const start = Date.now();

//         try {
//           return await target.apply(this, args);
//         }
//         finally {
//           const end = Date.now();
//           const timeMs = end - start;

//           console.log(`@time - Metric ${metricThis.name} value ${timeMs} to execute`);
//         }
//       }

//       return resultMethod;
//     }
//   }
// }

// function createMetric(name) {
//   return new Metric(name);
// }

// function logAndRetry(target, context) {
//   const retryDecorator = retry({delay: 2000, maxRetryAttempts: 3});
//   const targetWithRetry = retryDecorator(target, context);
//   return log(targetWithRetry, context); 
// }
// const weatherTiming = createMetric('weather.timing');

// class WeatherAPI {
//   apiVersion = 'v1'

//   @logAndRetry
//   @weatherTiming.time()
//   async getWeather(city) {
//     console.log(`Getting weather for ${city}`)

//     if (Math.random() < 0.75) throw new Error('Something went wrong')
//     return {
//       apiVersion: this.apiVersion,
//       temperature: 20,
//       humidity: 80,
//       city: city,
//     }
//   }
// }

// async function main() {
//   const weatherAPI = new WeatherAPI()
//   console.log(await weatherAPI.getWeather('London'))
//   console.log(await weatherAPI.getWeather('Dublin'))
// }

// main().catch(console.error)

import express from 'express';

const app = express();

const port = 3000;

app.get('/api/forecast', (req, res) => {
  res.json({
    apiVersion: 'v1',
    temperature: 28,
    humidity: 80,
    city: 'Kanpur'
  });
});

app.get('/api/cities', (req, res) => {
  res.json({
    cities: ['Kanpur', 'Lucknow']
  });
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
})