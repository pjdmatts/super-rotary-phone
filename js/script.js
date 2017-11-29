$(function() {

    var model = {
        currentCat: 0,
        cats: [{
            name: "Bob",
            catCount: 0,
            picture: "resources/droctocat.png"
        }, {
            name: "Arthur",
            catCount: 0,
            picture: "resources/grey.jpg"
        }, {
            name: "Humphrey",
            catCount: 0,
            picture: "resources/pusheencat.png"
        }, {
            name: "Whiskey",
            catCount: 0,
            picture: "resources/stormcat.jpeg"
        }, {
            name: "Tango",
            catCount: 0,
            picture: "resources/roll.jpeg"
        }, {
            name: "Foxtrot",
            catCount: 0,
            picture: "resources/octo.png"
        }],
        getAllCats: function() {
            return model.cats;
        },
        getCat: function() {
            return model.cats[model.currentCat];
        }
    };

    var octopus = {
        init: function() {
            viewList.init();
            viewWindow.init();
        },
        getCats: function() {
            return model.getAllCats();
        },
        getCat: function() {
            return model.getCat();
        }
    };

    var viewList = {
        init: function() {
            viewList.render();
        },
        render: function() {
            var $listElem = $('#cat-list');
            var $elem = ''
            octopus.getCats().forEach(function(cat) {
                // var cat = cats[i];
                $elem += '<li>' + cat.name + '</li>'
            });
            $listElem.append($elem);
        }
    };

    var viewWindow = {
        init: function() {
            var $nameElem = $('#catName');
            var $targetElem = $('#target');
            var $countElem = $('#catCounter');
            var $imageElem = $('#catPic');
            viewWindow.render();
        },
        render: function() {
            
        }
    }

    octopus.init();
});
// List stuff






//     for (var i = 0; i < cats.length; i++) {
//         var cat = cats[i];
//         var $elem = $('<li>' + cat.name + '</li>');
//         $elem.click((function(catCopy) {
//             return function() {
//                 $nameElem.text(catCopy.name);
//                 $imageElem.attr("src", catCopy.picture);
//                 var clicky = 0;
//                 $targetElem.click(function() {
//                     clicky += 1;
//                     $countElem.text(clicky);
//                 });
//             };
//         })(cat));
//         $listElem.append($elem);
//     }
