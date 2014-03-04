jQuery('#bt_test').click(function(){

    chrome.windows.create({
        'url': '/test/test.html',
        'type': 'popup',
        'left':1000,
        'top':0,
        'width':500,
        'height': 1000


    },
        function(window){

        });
});