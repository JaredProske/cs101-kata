module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine', 'es6-shim'],

        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        exclude: [
        ],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },
         browsers: ['PhantomJS']

        // define reporters, port, logLevel, browsers etc.
    });
};