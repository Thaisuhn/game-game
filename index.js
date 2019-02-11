const bs = require('browser-sync').create();
// for docs on browser-sync go to https://www.browsersync.io/docs/options
bs.init({
    watch: true,
    server: {
    baseDir: "public",
    serveStaticOptions: {
        extensions: ["html"]
    }
  }
});
