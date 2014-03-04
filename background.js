console.log(
    "ant is in background"
);




var data = "ant";

function dumpObj(obj){

    for(var key in obj){
        dump(obj[key]);
    }
}

function dumpArray(obj){

    var len  = obj.length;
    for( var i = 0 ; i< len ; i++){
        dump(obj[i]);
    }
}

function dump(obj){

  if (_.isArray(obj)){
      console.log('is Array');
      dumpArray(obj);
  }else if(_.isObject){
      console.log('is Object');
      dumpObj(obj);
  }else if(_.isFunction(obj)){
      console.log('is Function');
      console.log(obj);
  }else{
      console.log(obj)
  }


}
///////// demo for storage method
var storageArea = chrome.storage.sync;
storageArea.set({"name":"ant"}, function(){
    console.log("name saved");

    // retrieve a good key
    storageArea.get('name', function(result){
       console.log("storage get");
        console.log('\n' + result.name);


    });

    // retrieve an bad key
    storageArea.get("not_a_key",function(result){
        console.log ('bad key get ');
        console.log('\n' + result);
        dump(result);
    });


});

chrome.runtime.onConnect.addListener(function(port){
   console.log(port.name + " is connected");
    port.onMessage.addListener(function(msg){
        console.log("message received , type : " + msg.type);
        port.postMessage({type: "nihao from background"});
    });
});


chrome.runtime.onMessage.addListener(function(msg,sender){

    console.log('bkground listener');
});

chrome.runtime.onMessageExternal.addListener(function(msg,sender){

    console.log('bkground listener');
});
setTimeout(function(){
   console.log('delay for 1s');

    },1000);


