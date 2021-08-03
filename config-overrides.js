const { override, addWebpackAlias, babelInclude } = require('customize-cra')
const path = require('path')
const fs = require('fs')

module.exports = {
  webpack: override(
    //添加别名
    addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src'),
    })
    // babelInclude([
    //   path.resolve(__dirname, 'src'),
    //   fs.realpathSync('./node_modules/@yxcx/fe-design'),
    // ])
  ),
}
