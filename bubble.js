function bubble(ar){

    var theArray = [].slice.call(ar);
    if ( !theArray.length ) return ;



        for (var  i = theArray.length-1 ; i > 0  ;i--){
            for(var j= 0 ; j<= i-1 ; j ++){
                if (theArray[j] > theArray[j+1]){
                    var temp = theArray[j+1];
                    theArray[j+1] = theArray[j];
                    theArray[j] = temp;
                }
            }

        }
    return theArray;

}

var ar = [3,2,4,9,1,5,7,6,8];

console.log(ar);
console.log(bubble(ar));
