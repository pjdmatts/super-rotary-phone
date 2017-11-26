$(document).ready(function() {
    var clicky1 = 0;
    $("#target1").click(function() {
        clicky1 += 1;
        $("#counter1").text(clicky1);
    });
    var clicky2 = 0;
    $("#target2").click(function() {
        clicky2 += 1;
        $("#counter2").text(clicky2);
    });
});
