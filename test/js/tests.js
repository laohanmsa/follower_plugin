
var page = chrome.extension.getBackgroundPage();
var data = page.data;
test("communicate to background page", function(){
   equal("ant" , data, "data suppose to be ant");
});



test("collection order test" , function(){


    var myModel = Backbone.Model.extend({
        defaults: function(){
            return {
                title: "ORDER " + theCollection.nextOrder(),
                order: theCollection.nextOrder()
            };

        }

    });

    var myCollection = Backbone.Collection.extend({

        model: myModel,
        localStorage: new Backbone.LocalStorage('ant_test_store'),
        nextOrder: function(){
            if(!this.length) return 1;
            return this.last().get('order') + 1;
        },
        comparator: 'order'

    });

    var theCollection = new myCollection;



    theCollection.create();
    theCollection.create();
// i have create 2 model and insert into collection


    equal(2, theCollection.length, " theCollection 's length is 2 , success");
    equal(3, theCollection.nextOrder(), "nextOrder is 3 , success");
});
