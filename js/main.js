var roman = function (num) {

    var result = "";
    var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (var i = 0; i <= romanNumerals.length; i++) {
        while(num >= numbers[i]) {
            result += romanNumerals[i];
            num -= numbers[i];
        }
    }
    return result;
};


// Symbol  Value
// I       1
// V       5
// X       10
// L       50
// C       100
// D       500
// M       1,000


$(document).ready(function() {

    $("form#roman").submit(function(event) {

        var num = $("input#num").val();

        var result = roman(num);

        $("#result p").text(result);

        $("#result").show();
        event.preventDefault();
    });

});
