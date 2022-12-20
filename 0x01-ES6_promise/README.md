# ES6 Promises

- 0-promise.js: a script that exports a function with the prototype function getResponseFromAPI(), which returns a Promise.
- 1-promise.js: a script that exports a function with the prototype getFullResponseFromAPI(success), which returns a Promise. The parameter (success) is a boolean.
- 2-then.js:  a script that exports a function with the prototype function handleResponseFromAPI(promise), which appends three handlers to the promise argument.
- 3-all.js: a script that meets the following requirements.
Import uploadPhoto and createUser from utils.js.
Use a prototype to collectively resolve all promises and log body firstName lastName to the console. The functions in utils.js return Promises.
function handleProfileSignup()
In the event of an error, log Signup system offline to the console.
- 4-user-promise.js: a script that exports a function with the prototype function signUpUser(firstName, lastName), which returns a resolved promise with an object.
- 5-photo-reject.js: a script that exports a function with the prototype function uploadPhoto(filename), which returns a Promise rejecting with an Error and the string $fileName cannot be processed, where fileName is a string.
- 6-final-user.js: a script that meets the following requirements.
Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
Export a function named handleProfileSignup that accepts three arguments firstName (string), lastName (string), and fileName (string) and calls the two other functions (signUpUser and uploadPhoto).
When the promises are all settled it should return an array.
- 7-load_balancer.js: a script that exports a function with the prototype function loadBalancer(chinaDownload, USDownload), which returns the value returned by the promise that resolved the first, where chinaDownload and USDownload are Promises.
- 8-try.js: a script that meets the following requirements.
Exports a function with the prototype function divideFunction(numerator, denominator), where numerator and denominator are numbers. When the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0. Otherwise it should return the numerator divided by the denominator.
- 9-try.js: a script that meets the following requirements.
Export a function named guardrail that accepts a function argument called mathFunction.
The guardrail function should create and return an array named queue.
When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue.
In every case, the message Guardrail was processed should be added to the queue.
- 100-await.js: a script that meets the following requirements:
Import uploadPhoto and createUser from utils.js.
Export an async function named asyncUploadUser that will call the two functions imported above and return an object.
Import uploadPhoto and createUser from utils.js.
If one of the async function fails, return an empty object.
