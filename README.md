# LogLine-Node
LogLine is an entirely web-based logging platform. This Node.js library interfaces with it to allow you to utilise LogLine in your Node.js applications.

## Installation
The recommended way to install LogLine-Node is to use [NPM](http://npmjs.org):

```npm i logline-node```

## Example usage

```js
var logline = require("./index")("your-api-key");

logline.fatal("This is fatal");
logline.info("This is info");
logline.success("This is success");
logline.warning("This is warning")
```

## Tests

There is a [test script](autofill.js) included for testing purposes, it may prove useful, or it may not.