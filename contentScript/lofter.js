console.log('ant is in lofter.com');

function get_remove_links(){

    var remove_list = jQuery('li .w-gz-0');
    console.log(remove_list.length);
}


var port = chrome.runtime.connect({name: "lofter_port"});
port.postMessage({type: "hello", data:null});
port.onMessage.addListener(function(msg){
    console.log(msg.type);

});

function sendMessage(){
    port.postMessage({type:"delay"});
}

//setTimeout(sendMessage, 4000);
//console.log('begin introspect window object , this will fail !!');
//console.log(window.P);
//

function inject_script(uri){

   var jsUrl = chrome.extension.getURL(uri);
   var xhr = jQuery.get(jsUrl).done(function(data){
       var sc = document.createElement('script');
           sc.type = 'text/javascript';
           sc.text = data;
       (document.body || document.head).appendChild(sc);

   });
}

inject_script('jquery.js');
inject_script('injection/cargo.js');
//inject_script('origin_core.js');


//setTimeout( get_remove_links, 5000 );

