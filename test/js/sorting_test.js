test("sorting algorithm testing", function(){




    function testSortFunction(fn, originArray, expected){

        var  arr = [].slice.call(originArray);
             fn(arr);

        function getFunctionName(fun){
            var ret =  fun.toString();
            ret = ret.substr('function '.length);
            ret = ret.substr(0, ret.indexOf('('));
            return ret;
        }
        deepEqual(expected, arr,  " function " + getFunctionName(fn) +" test");
    }

    testSortFunction(
        bubble,
        [3,5,2,1, 17,48,29,23,23,34],
        [1,2,3,5,17,23,23,29,34,48])
    ;

    testSortFunction(
        cocktail,
        [3,5,2,1, 17,48,29,23,23,34],
        [1,2,3,5,17,23,23,29,34,48]
    )

});