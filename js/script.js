$(document).ready(function() {
    // List stuff
    var $listElem = $('#cat-list');
    var $nameElem = $('#catName');
    var $targetElem = $('#target');
    var $countElem = $('#catCounter');
    var nums = [1,2,3];

    for (var i = 0; i<nums.length; i++) {
        var num = nums[i];
        $listElem.append('<li>'+num+'</li>');
    };

    // Cat stuff
    var cat = "Bob";

    $nameElem.text(cat);

    var clicky = 0;

    $targetElem.click(function() {
        clicky += 1;
        $countElem.text(clicky);
    });

});
