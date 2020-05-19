export default {
  plugins: [
    ["umi-plugin-react", {
      antd: true,
      dva: true
    }]
  ],
  theme: {
    "primary-color": "#008c8c"
  },
  proxy: { //相当于webpack中的devServer中的Proxy配置
    "/api/upload": {
      target: "http://101.132.72.36:5100/",
      changeOrigin: true, //修改源
    },
    "/api": {
      target: "http://api.duyiedu.com",
      changeOrigin: true, //修改源
    }
  }
}    