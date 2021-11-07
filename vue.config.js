// vue.config.js
module.exports = {
    publicPath: '/surfyarte/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/assets/sass/_variables.scss";
                `
            }
        }
    }
}
