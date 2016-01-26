// date.js
define(function (require, exports, module){
    exports.format = function(){
        var now = new Date();

        return [
            now.getFullYear(),
            now.getMonth() + 1,
            now.getDate()
        ].join('-');
    };
});