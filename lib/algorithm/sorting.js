function bubble(ar){

   // var theArray = [].slice.call(ar);

    var theArray = ar ;
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

function swap(arr, i , j){
    var c ;
    c = arr[j] ;
    arr[j]= arr[i] ;
    arr[i]= c ;
    return arr ;
}

function cocktail(ar){
  var theArray = ar;
  if (!theArray.length ) return ;

    var bottom = 0;
    var top = theArray.length -1;
    var swapped = true;
    while( swapped  ){
        swapped = false;
        for(var i = bottom ; i < top ; i++ ){
            if(theArray[i]> theArray[i+1]){
                swap(theArray,i, i+1);
                swapped = true;
            }
        }

        top = top - 1;
        for (var i = top ; i> bottom ; i-- ){
            if(theArray[i]<theArray[i-1]){
                swap(theArray,i, i-1);
                swapped = true;
            }
        }
        bottom  = bottom + 1;
    }

    return ar ;
}