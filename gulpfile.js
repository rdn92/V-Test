'use strict';

var gulp = require('gulp');

var elixir = require('laravel-elixir'),
    path = require('path'),
    webpack = require('webpack');

require('laravel-elixir-webpack-ex');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    /**
     * Scripts webpack bundling and copying
     **/
    mix.webpack({
        vendor: 'app/vendor.ts',
        app: 'app/main.ts'
    }, {
        debug: true,
        devtool: 'source-map',
        resolve: {
            extensions: ['', '.ts', '.js']
        },
        module: {
            preLoaders: [
                {
                    test: /\.ts$/,
                    loader: 'tslint-loader',
                    exclude: /node_modules/
                }
            ],
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.html$/, loader: 'raw-loader'
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                '__decorate': 'typescript-decorate',
                '__extends': 'typescript-extends',
                '__param': 'typescript-param',
                '__metadata': 'typescript-metadata'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js',
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'app',
                filename: 'app.js',
                minChunks: 4,
                chunks: [
                    'app'
                ]
            }),
        ],
        tslint: {
            emitErrors: false,
            failOnHint: false,
            resourcePath: 'resources/assets/ts'
        }
    }, 'public/ng2js', 'resources/assets/ts');

    elixir.config.versioning.buildFolder = '/builds';

    mix.version([ 'ng2js/app.js', 'ng2js/vendor.js']);

});
