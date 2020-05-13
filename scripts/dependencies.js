odule.exports = function (context) {
    var shell = context.requireCordovaModule('lodash');

    shell.cd(context.opts.plugin.dir);
    shell.exec('npm install');
};