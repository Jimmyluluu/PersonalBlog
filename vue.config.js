const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports = {
  // publicPath 為 project-name，根目錄地址為上傳的網域
  publicPath: 'FirstWeb',
};