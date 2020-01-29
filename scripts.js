$(document).ready(function() {

})

let $upperkeys = $('#keyboard-upper-container'); 
let $lowerKeys = $('#keyboard-lower-container');

// can delete the click function, it will still work. 
//($upperkeys).click(function() {
    $('#keyboard-upper-container').hide();
//});

$(document).keydown(function(shift) {
    //which is use to return a unicode character of a key and 16 is the  key code of shift
    if(shift.keyCode === 16) { 
        ($lowerKeys).hide();
        ($upperkeys).show();
    }
});

$(document).keyup(function (shift) {
    if(shift.keyCode === 16) {
        ($upperkeys).hide();
        ($lowerKeys).show(); 
    }
});