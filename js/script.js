$(document).ready(function() {
    var cat1 = "Bob";
    var cat2 = "Bill";

    $("#name1").text(cat1);
    $("#name2").text(cat2);

    var clicky1 = 0;
    var clicky2 = 0;

    $("#target1").click(function() {
        clicky1 += 1;
        $("#counter1").text(clicky1);
    });

    $("#target2").click(function() {
        clicky2 += 1;
        $("#counter2").text(clicky2);
    });
});
