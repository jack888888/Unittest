// Karma configuration
// Generated on Thu Aug 02 2018 13:40:22 GMT+0800 (China Standard Time)
var path = require('path');
var srcPath = path.resolve(__dirname, '../test/src/main/js');
console.log(srcPath);
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

      webpack: {
          devtool: 'inline-source-map', // 推荐使用inline-source-map
          module: {
              rules: [
                  // 像eslint-loader一样使用,并限定在源码上。
                  {
                      test: /\.js$/,
                      enforce: 'pre',
                      use: 'istanbul-instrumenter-loader',
                      include: [srcPath]
                  }
                  /* loaders */
              ]
          }
      },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        // 'src/main/js/**/*.js',
        // 'src/test/js/**/*.spec.js'
        'karma-bundle.js'
    ],


    // list of files to exclude
    exclude: [
        'karma.conf.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'karma-bundle.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage-istanbul'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

      coverageIstanbulReporter: {
          // 以什么格式, 这里设置了输出 html文件 ,info文件 ,及控制台
          reports: ['html', 'lcovonly', 'text-summary'],
          // 将文件输出路径定位
          dir: path.resolve(__dirname, '../test/src/test/js/coverage'),
          // 修正 weback 路径（翻译了是这个意思）
          fixWebpackSourcePaths: true,
          // 将生成的html放到./coverage/html/下
          'report-config': {
              html: {
                  subdir: 'html'
              }
          }
      }
  })
}




// // Karma configuration
// // Generated on Fri Oct 21 2016 12:00:54 GMT+0800 (中国标准时间)
// module.exports =function(config){
//     config.set({
//         // base path that will be used to resolve all patterns (eg. files, exclude)
//         basePath:'',
// // frameworks to use
// // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//         frameworks:['jasmine'],
// // list of files / patterns to load in the browser。!!!这个数组是用来存放被测试代码和测试代码的,默认为空!!!
//         files:[
//         ],
// // list of files to exclude
//         exclude:[
//         ],
// // preprocess matching files before serving them to the browser
// // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//         preprocessors:{
//         },
// // test results reporter to use
// // possible values: 'dots', 'progress'
// // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//         reporters:['progress'],
// // web server port
//         port:9876,
// // enable / disable colors in the output (reporters and logs)
//         colors:true,
// // level of logging
// // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//         logLevel: config.LOG_INFO,
// // enable / disable watching file and executing tests whenever any file changes
//         autoWatch:true,
// // start these browsers
// // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//         browsers:['Chrome'],
// // Continuous Integration mode
// // if true, Karma captures browsers, runs the tests and exits
//         singleRun:false,
// // Concurrency level
// // how many browser should be started simultaneous
//         concurrency:Infinity
//     })
// };
