module.exports = {
  css: {
    loaderOptions: {
      sass: {
        //sass-loader 8버전 이상일 경우 additionalData로 기입
        additionalData: `
                    @import "@/assets/scss/reset.scss";
                    @import "@/assets/scss/global.scss";                   
                `,
      },
    },
  },
};
