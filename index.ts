import { replaceStringVariables } from './question1';

// Example usage
const fullString = 'PG_DATABASE=${DB}\n#PG_HOST=${HOST}';
const data = {
  DB: 'postgres',
  HOST: 'example.com', // Provide the value for the HOST variable here
};

const replacedString = replaceStringVariables(fullString, data);
console.log(replacedString);
