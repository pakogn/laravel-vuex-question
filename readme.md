# Laravel Vuex Question

This is a simple counter app using vuex and Laravel 5.3 taking advantage of elixir's webpack support.

run:
  1. composer install
  2. npm install
  3. gulp
  4. php artisan serve
  5. go to [http://localhost:8000](http://localhost:8000)

```
Note: You need node 6 or above.
```

## Question

When using babel you can use the store as shown [here](https://github.com/pakogn/laravel-vuex-question/blob/master/resources/assets/js/vue/components/CounterDisplay.vue#L11)
```javascript
return store.state.counter
```
but when using bublé you have to use the 'default' propertie to use the store, like this:
```javascript
return store.default.state.counter
```
to accomplish this for first, you need to comment [this](https://github.com/pakogn/laravel-vuex-question/blob/master/webpack.config.js#L15-L22) in [webpack.config.js](https://github.com/pakogn/laravel-vuex-question/blob/master/webpack.config.js):

```javascript
/*{
  test: /\.js$/,
  loader: 'babel',
  query: {
    presets: ['es2015'],
  },
  exclude: /node_modules/,
},*/
```
then you need to use properly the store in the Components.

Is something wrong with my webpack configuration? or is a bublé problem? Why is this happening?
