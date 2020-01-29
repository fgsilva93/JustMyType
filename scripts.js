$(document).ready(function () {

})

let $upperkeys = $('#keyboard-upper-container');
let $lowerKeys = $('#keyboard-lower-container');

// can delete the click function, it will still work. 
//($upperkeys).click(function() {
$('#keyboard-upper-container').hide();
//});

$(document).keydown(function (shift) {
    //which is use to return a unicode character of a key and 16 is the  key code of shift
    if (shift.keyCode === 16) {
        ($lowerKeys).hide();
        ($upperkeys).show();
    }
});

$(document).keyup(function (shift) {
    if (shift.keyCode === 16) {
        ($upperkeys).hide();
        ($lowerKeys).show();
    }
});

$(document).keypress(function (e) {
    let $keyButton = $('#' + e.keyCode);
    ($keyButton).css('background-color', 'yellow');
    $(document).keyup(function () {
        ($keyButton).css('background-color', 'whitesmoke');
    });
});

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let letterPlace = 0; //a counter
let typing = sentences[i]; 
let sentences = typing.substring(letterPlace, lettterPlace++); 

let timerOn = false;
let startDate;
let startTime;


$("#sentence").text(writing);
$("#target-letter").text(letter);

