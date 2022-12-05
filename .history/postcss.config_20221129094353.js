//postcss的配置
module.exports = {
  plugins: {
    'autoprefixer': {browsers: 'last 5 version'}
    // autoprefixer: {
      // browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
