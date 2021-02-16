const olojs = require('@onlabsorg/olojs');

exports.routes = {
    '/': new olojs.FileStore(`${__dirname}/..`, {extension:'.txt'}),
};

exports.commands = {
    "http-static-server": require('./lib/http-static-server')
}
