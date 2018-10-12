module.exports = {
  baseUrl: '/app/',
  devServer: {
    port: 8081,
    proxy: {
      '/v1': {
        target: 'https://xinspacrm.csmc-cloud.com',
        changeOrigin: true,
        pathRewrite: {
          '^/v1': '/v1',
        },
        secure: false,
      },
    },
  },
};
