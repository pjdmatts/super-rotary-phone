$(function() {
    var model = {
        currentCat: null,
        adminVisible: false,
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
            viewAdminForm.init();
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
        },
        getAdmin: function() {
            model.adminVisible = true;
            viewAdminForm.render();
        },
        cancelAdmin: function() {
            model.adminVisible = false;
            viewAdminButton.init();
        },
        getAdminStatus: function () {
            return model.adminVisible;
        },
        modCat: function (newName, newUrl, newClicks) {
            cat = model.getCat();
            cat.name = newName;
            cat.picture = newUrl;
            cat.catCount = newClicks;
        }
    };

    var viewList = {
        init: function() {
            this.render();
        },
        render: function() {
            $listElem = $('#cat-list');
            var $elem = '';
            var catId = 0;
            octopus.getCats().forEach(function(cat) {
                $elem = $('<li id="catName'+catId+'">' + cat.name + '</li>');
                $elem.click((function(catCopy) {
                    return function() {
                        octopus.setCat(catCopy);
                        viewWindow.render();
                    };
                })(cat));
                catId += 1;
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
            if(octopus.getAdminStatus()) {
                octopus.getAdmin();
            }
        }
    }

    var viewAdminButton = {
        init: function(){
            this.$adminbtn = $('#admin-btn');
            $('.adminSection').hide();
            this.$adminbtn.click(function(){
                octopus.getAdmin();
            });

        }
    }

    var viewAdminForm = {
        init: function(){
            this.$adminView = $('#adminView');
            this.$adminName = $('#admin-name');
            this.$adminUrl = $('#admin-url');
            this.$adminClick = $('#admin-clicks');
            this.$cancel = $('#cancel');
            this.$save = $('#save');
            this.$cancel.click(function(){
                octopus.cancelAdmin();
            });
            this.$save.click(function(){
                var newName = $('#admin-name').val();
                var newUrl = $('#admin-url').val();
                var newClicks = $('#admin-clicks').val();
                octopus.modCat(newName, newUrl, newClicks);
                viewWindow.render();
                var theCat = octopus.getCat();
                var theCats = octopus.getCats();
                var catIndex = theCats.indexOf(theCat);
                console.log(catIndex);
                var newId = '#catName'+catIndex;
                console.log(newId);
                $(newId).text(theCat.name);
                //TODO: in the save event listener update the list with the new names
                //Do not add the new names - update them.
            });
        },
        render: function(){
            var theCat = octopus.getCat();
            $('.adminSection').show();
            this.$adminName.val(theCat.name);
            this.$adminUrl.val(theCat.picture);
            this.$adminClick.val(theCat.catCount);
        }
    }
    octopus.init();
});
