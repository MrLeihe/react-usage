const { override, addWebpackAlias, babelInclude } = require('customize-cra')
const path = require('path')
const fs = require('fs')

module.exports = {
  webpack: override(
    //添加别名
    // addWebpackAlias({
    //   ['react']: path.resolve('./node_modules/react'),
    // })
    babelInclude([
      path.resolve(__dirname, 'src'),
      fs.realpathSync('./node_modules/@yxcx/fe-design'),
    ])
  ),
}
