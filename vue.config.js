// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: '@import "@/sass/index.sass";'
      },
      // pass Less.js Options to less-loader
      less: {
        globalVars: {
          primary: '#fff'
        }
      }
    }
  }
}
