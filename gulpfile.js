const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir.config.notifications = false;
// elixir.config.buildFolder = 'build'

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

elixir(mix => {
    mix.webpack('vue/main.js', 'public/js/app.js');
});
