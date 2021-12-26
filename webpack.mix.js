const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue();
mix.postCss('resources/css/telwnd.css', 'public/css',[
    require('tailwindcss'),
]);
mix.sass('resources/sass/app.scss', 'public/css');
mix.webpackConfig({
    output: {
        chunkFilename: "public/js/chunks/vue-[name].js?id=[chunkhash]"
    }
});
