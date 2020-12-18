module.exports = function (api) {
    api.cache(false);

    return {
        plugins: ['babel-plugin-rewire-exports', '@babel/plugin-transform-react-jsx-development'],
    };
};
