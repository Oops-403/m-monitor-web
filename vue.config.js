const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    open: false,
    historyApiFallback: true,
    // proxy: 'http://127.0.0.1:3000'
    proxy: 'http://106.55.59.69:3000'
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/global.scss";`
      }
    }
  }
})
