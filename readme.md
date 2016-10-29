Validation body and query params. Using [superhero-validator](https://github.com/matroskin13/superhero-validator)


```js
// validate query params
const validators = require('superhero-validator').validators;
const query = require('express-in').query;

app.get('/', query({
    email: validators.email(),
    name: validators.string(5, 15),
    age: validators.number(21, 100),
    lastname: validators.oneOf([
        validators.empty()
        validators.string(2, 15)
    ])
}), function(req, res) {
    res.send('success'); // if params is invalid, then send error json
});

// validate body (POST) params
const validators = require('superhero-validator').validators;
const body = require('express-in').body;

app.get('/', body({
    email: validators.email(),
    name: validators.string(5, 15),
    age: validators.number(21, 100),
    lastname: validators.oneOf([
        validators.empty()
        validators.string(2, 15)
    ])
}), function(req, res) {
    res.send('success'); // if params is invalid, then send error json
});

// custom error handler

app.use(errorHandler(function(result, req, res, next) {
   // result {success, key, error, message}

   res.send('validation error');
});

```

more validators on Using [superhero-validator](https://github.com/matroskin13/superhero-validator)