$(document).ready(function() {
    // List stuff
    var $listElem = $('#cat-list');
    var $nameElem = $('#catName');
    var $targetElem = $('#target');
    var $countElem = $('#catCounter');
    var $imageElem = $('#catPic');
    var nums = [1, 2, 3];

    // Cat stuff

    var cats = [{
        name: "Bob",
        picture: "https://loremflickr.com/320/240/cat"
    }, {
        name: "Arthur",
        picture: "https://loremflickr.com/320/240/dog"
    }, {
        name: "Humphrey",
        picture: "https://loremflickr.com/320/240/horse"
    }, {
        name: "Whiskey",
        picture: "https://loremflickr.com/320/240/elephant"
    }, {
        name: "Tango",
        picture: "https://loremflickr.com/320/240/fish"
    }, {
        name: "Foxtrot",
        picture: "https://loremflickr.com/320/240/cow"
    }];



    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        var $elem = $('<li>' + cat.name + '</li>');
        $elem.click((function(catCopy) {
            return function() {
                $nameElem.text(catCopy.name);
                $imageElem.attr("src", catCopy.picture);
                var clicky = 0;
                $targetElem.click(function() {
                    clicky += 1;
                    $countElem.text(clicky);
                });
            };
        })(cat));
        $listElem.append($elem);
    }
});
