// force to use ubuntu binary for Debian
var native = null;
native = require('./bin/lnxubuntux64/irisnative.node');
module.exports = native;
