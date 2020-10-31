module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: 'airbnb',
    env: {
        browser: true,
        node: true,
    },
    rules: {
        indent: ['error', 4],
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': 0,
    },

};
