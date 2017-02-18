# Adding Webpack to Middleman

Adding webpack via Middleman's external pipeline.

Javascript and CSS live under [assets](assets).

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
