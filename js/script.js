$(document).ready(function() {
    // List stuff
    var $listElem = $('#cat-list');
    var $nameElem = $('#catName');
    var $targetElem = $('#target');
    var $countElem = $('#catCounter');
    var nums = [1, 2, 3];

    // Cat stuff

    var cats = [{
        name: "Bob",
        image: "https://loremflickr.com/320/240"
    }, {
        name: "Arthur",
        image: "https://loremflickr.com/320/240"
    }, {
        name: "Humphrey",
        image: "https://loremflickr.com/320/240"
    }, {
        name: "Whiskey",
        image: "https://loremflickr.com/320/240"
    }, {
        name: "Tango",
        image: "https://loremflickr.com/320/240"
    }, {
        name: "Foxtrot",
        image: "https://loremflickr.com/320/240"
    }];

    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        var $elem = $('<li>' + cat.name + '</li>');
        $elem.click((function(catCopy) {
            return function() {
                alert(catCopy.name);
            };
        })(cat));
        $listElem.append($elem);
    }

    var cat = "Bob";

    $nameElem.text(cat);

    var clicky = 0;

    $targetElem.click(function() {
        clicky += 1;
        $countElem.text(clicky);
    });

});
