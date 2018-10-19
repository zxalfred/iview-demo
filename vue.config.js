module.exports = {
  baseUrl: '/app/',
  devServer: {
    port: 8081,
    proxy: {
      '/v1': {
        target: 'http://xinspa.csmc-cloud.com',
        changeOrigin: true,
        pathRewrite: {
          '^/v1': '/v1',
        },
        secure: false,
      },
    },
  },
};
