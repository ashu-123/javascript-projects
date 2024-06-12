import { notNegative, notNull, validate } from './framework.js';

Symbol.metadata ??= Symbol('Symbol.metadata');

class User {

    @notNull
    username;

    @notNegative
    age

    @notNull
    location

}

const user = new User();
user.username = "Ashu";
user.age = -20;
user.location = null;

console.log(validate(user));