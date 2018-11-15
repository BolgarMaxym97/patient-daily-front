import is from 'is_js'

const Validator = {
    TYPES: {
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
    },

    validate: (type, value) => {
        return value.length && is[type](value);
    },
};

export default Validator;