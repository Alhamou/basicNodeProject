const globalHelber = (function(){

    const obj = {};


    obj.getMyName = function (name) {

        return `Hello : ${name}`;
    }


    return obj;

})();


module.exports = globalHelber;