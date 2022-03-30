const pathlib = require('path');

module.exports = {
    outputDir: pathlib.resolve(__dirname, "docs"),
    transpileDependencies: [
        'vuetify'
    ]
}
