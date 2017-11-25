$(document).ready(function() {
    var clicky = 0;
    $("#target").click(function() {
        clicky += 1;
        $("#counter").text(clicky);
    });
});
