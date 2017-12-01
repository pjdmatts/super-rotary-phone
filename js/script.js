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
            viewAdminButton.init();
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

    var viewAdminButton = {
        init: function(){
            this.$adminbtn = $('#admin-btn');
            this.$adminbtn.click(function(){
                console.log('Admin!');
            });

        },
        render: function() {

        }
    }

    var viewAdminForm = {
        init: function(){

        },
        render: function(){

        }
    }
    octopus.init();
});
