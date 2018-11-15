const TYPES = {
    EMAIL: 'email',
    URL: 'url',
    BOOLEAN: 'boolean',
    NUMBER: 'number',
    OBJECT: 'object',
    STRING: 'string',
    EMPTY: 'empty',
    ALPHANUMERIC: 'alphaNumeric',
    TIMESTRING: 'timeString',
    DATESTRING: 'dateString',
};

const Validator = {
    validate: (type, value) => {
        return is[type](value);
    },
};

export default {Validator, TYPES};