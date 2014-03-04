var name = "ant"
console.log(
    'cargo running '
);



function addInput(){

    var ipt = document.createElement("input");
    ipt.type = "text";
    ipt.style.zIndex = 1000;
    ipt.length = 20;
    ipt.id = "ant_ipt";
    document.body.appendChild(ipt);
}



shortcut.add("Ctrl+o" , function(){

    get_focused_list();
});

addInput();

shortcut.add("Ctrl+k", function(){
 var userId = jQuery('#ant_ipt').val();
    alert(userId);
    postUnfollowRequest(userId);
});



shortcut.add("Ctrl+l", function(){
   postGetAllFollowerRequest();
});

function postGetAllFollowerRequest(){
    jQuery.post(
        "http://www.lofter.com/dwr/call/plaincall/UserBean.getUserFollowingList.dwr",
        {
            callCount:1,
            scriptSessionId:'${scriptSessionId}187',
            httpSessionId:'',
            'c0-scriptName':'UserBean',
            'c0-methodName':'getUserFollowingList',
            'c0-id':0,
            'c0-param0':'number:'+10000,
            'c0-param1':'number:'+0,
            'c0-param2':'boolean:false',
            'batchId': getRandomNumberStringByLength(6)

        }

    ).done(
        function(data){

           new Function();
        }
    );
}

 function randInRange(lf, fi) {
    return Math.floor(Math.random() * (fi - lf) + lf)
};

 function getRandomNumberStringByLength(fe) {
    fe = Math.max(0, Math.min(fe || 10, 100));
    var lf = Math.pow(10, fe - 1), fi = lf * 10;
    return randInRange(lf, fi).toString()
};

function postUnfollowRequest(userId){


    jQuery.post(
        "http://www.lofter.com/dwr/call/plaincall/UserBean.unFollowBlog.dwr",
        {
            callCount:1,
            scriptSessionId:'${scriptSessionId}187',
            httpSessionId:'',
            'c0-scriptName':'UserBean',
            'c0-methodName':'unFollowBlog',
            'c0-id':0,
            'c0-param0':'number:'+userId,
            'batchId': getRandomNumberStringByLength(6)

        }

    ).done(
            function(data){
                    console.log('the post is suc : data = ' + data);
             }
        );
}


function get_focused_list(){

    var fList = jQuery('li .w-img2-1 a');
    console.log("focused count : " + fList.length );
}


function postToBackgourd(){
    console.log("begin connect to background");
    var extensionID = "dfchnhahgdniigbdgbomhppimcmjnaol";

    var port = chrome.runtime.connect(extensionID,{
        name:"lofter_page_port"
    });

    port.postMessage({type:"page_hello",data:{from: "web_page"}});
    port.onMessage.addListener(function(msg){
        console.log("web page get message");
    });

    chrome.runtime.sendMessage(extensionID, {type:"web page msg", data:"web data"});
}


postToBackgourd();
