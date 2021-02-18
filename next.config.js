module.exports = {
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
        config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
        config.node = {
            fs: 'empty'
        }
        return config
    }
}