# Adding Webpack to Middleman

This is an example repo for adding webpack to Middleman via the external pipeline. [Accompanying Blog Post](https://dance.computer.dance/posts/2017/02/adding-webpack-to-middleman.html).

Javascript and CSS live under [assets](assets). The javascript files form the entrypoint. Include whatever CSS you need from there and it will be extracted into the built site with the same name as the entypoint file you used.

Images are not managed via Webpack.

## Get this going

```sh
$ bundle install
$ yarn install
```

Then use the usual Middleman commands e.g. `middleman server` or `middleman build`.

## Add/Removing JS Entry Points

Edit the `entry` section of [webpack.config.js](webpack.config.js) as necessary.

## CSS

This uses SASS and PostCSS but you can alter those loaders to fit your taste.
