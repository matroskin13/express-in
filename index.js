const superheroValidator = require('superhero-validator');

function sendError(result, req, res, next) {
    if (req.__expressParamsErrorHandler) {
        req.__expressParamsErrorHandler(result, req, res, next);
    } else {
        res.json(result);
    }
}

exports.errorHandler = function(handler) {
    return function(req, res, next) {
        req.__expressParamsErrorHandler = handler;

        next();
    };
};

exports.query = function(propertyList) {
    var validator = superheroValidator.validation(propertyList);

    return function(req, res, next) {
        var result = validator(req.query);

        if (!result.success) {
            return sendError(result, req, res, next);
        }

        next();
    };
};

exports.body = function(propertyList) {
    var validator = superheroValidator.validation(propertyList);

    return function(req, res, next) {
        var result = validator(req.body);

        if (!result.success) {
            return sendError(result, req, res, next);
        }

        next();
    };
};