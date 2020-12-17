module.exports = function(api) {
    api.cache(false);

    return {
        plugins: ['babel-plugin-rewire-exports'],
        presets: [['@babel/preset-react', {
            development: true
        }]]
    };
};