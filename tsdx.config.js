const postcss = require('rollup-plugin-postcss')

module.exports = {
    rollup(config, options){
        config.plugins.push(
            postcss({
                config: {
                    path: './postcss.config.js'
                },
                extentions: ['.css'],
                minimize: true,
                inject: {
                    insertAt: 'top',
                },
            })
        );
        // config.input = config.input.replace(/\.tsx?$/, '.jsx');
        return config;
    },
};