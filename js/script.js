$(function() {
    var model = {
        currentCat: null,
        cats: [{
            name: "Bob",
            catCount: 0,
            picture: "resources/droctocat.png"
        }, {
            name: "Arthur",
            catCount: 0,
            picture: "resources/grey.jpeg"
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
            return model.currentCat;
        }
    };

    var octopus = {
        init: function() {
            model.currentCat = model.cats[0]
            viewList.init();
            viewWindow.init();
        },
        getCats: function() {
            return model.getAllCats();
        },
        getCat: function() {
            return model.getCat();
        },
        setCat: function(catIn) {
            model.currentCat = catIn;
        },
        incrementCounter: function() {
            model.currentCat.catCount++;
            viewWindow.render();
        }
    };

    var viewList = {
        init: function() {
            this.render();
        },
        render: function() {
            $listElem = $('#cat-list');
            var $elem = '';
            octopus.getCats().forEach(function(cat) {
                $elem = $('<li>' + cat.name + '</li>');
                $elem.click((function(catCopy) {
                    return function() {
                        octopus.setCat(catCopy);
                        viewWindow.render();
                    };
                })(cat));
                $listElem.append($elem);
            });


        }
    };

    var viewWindow = {
        init: function() {
            this.$nameElem = $('#catName');
            this.$targetElem = $('#target');
            this.$countElem = $('#catCounter');
            this.$imageElem = $('#catPic');
            this.$targetElem.click(function() {
                octopus.incrementCounter();
            });
            this.render();
        },
        render: function() {
            var theCat = octopus.getCat();
            this.$nameElem.text(theCat.name);
            this.$imageElem.attr("src", theCat.picture);
            this.$countElem.text(theCat.catCount);
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
