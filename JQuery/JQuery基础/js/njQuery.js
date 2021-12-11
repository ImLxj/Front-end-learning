(function(window, undefined){
    //编写jQuery代码
    var njQuery = function(){
        return new njQuery.prototype.init();
    }
    njQuery.prototype = {
        constructor : njQuery
    }
    njQuery.prototype.init.prototype = njQuery.prototype;
    window.njQuery = window.$ = njQuery;

})(window);