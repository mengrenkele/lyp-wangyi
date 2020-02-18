const px2rem = require('postcss-px2rem')//引人postcss-px2rem库,帮我们自动把px单位的样式计算成rem单位的值
const postcss = px2rem({
    remUnit: 37.5  //设置1rem为多少设备独立像素px
})

module.exports = {
    runtimeCompiler: true,//是否开启编译器
    lintOnSave: false, //关闭eslint语法检查 
    productionSourceMap: false, // 不生成 source map文件
    css: { // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}