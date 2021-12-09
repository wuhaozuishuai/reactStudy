const proxy = require('http-proxy-middleware')
module.exports = function(app){
    app.use(
        proxy('/api1',{
            target: 'http://47.96.166.102:5003',
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        }),
    )
}