// date.js
exports.format = function () {
    var now = new Date();

    return [
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate()
    ].join('-');
};
