"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question1_1 = require("./question1");
// Example usage
const fullString = 'PG_DATABASE=${DB}\n#PG_HOST=${HOST}';
const data = {
    DB: 'postgres',
    HOST: 'example.com', // Provide the value for the HOST variable here
};
const replacedString = (0, question1_1.replaceStringVariables)(fullString, data);
console.log(replacedString);
