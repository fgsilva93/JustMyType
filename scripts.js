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
    if (shift.keyCode == 16) {
        ($lowerKeys).hide();
        ($upperkeys).show();
    }
});

$(document).keyup(function (shift) {
    if (shift.keyCode == 16) {
        ($upperkeys).hide();
        ($lowerKeys).show();
    }
});

$(document).keypress(function (e) {
    console.log(e.keyCode);
    let $keyButton = $('#' + e.keyCode); //selecting the id of the keycode that is being press?
    ($keyButton).css('background-color', 'royalBlue');
    $(document).keyup(function () {
        ($keyButton).css('background-color', 'whitesmoke');
    });
});
// this array has 5 indexs
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let arrayCount = 0; // a counter for the array of the varible setentences 
let letterCount = 0; // a counter for the letters in a sentence in the array 
let currentSentence = sentences[arrayCount]; 
let currentLetter = currentSentence[letterCount];
//let letter = currentSentence.substring(letterCount, letterCount + 1);

$('#sentence').append(currentSentence); //it dislay a sentence from the array of sentences to the document
$('#target-letter').append(currentLetter); // it displays the letter of the setences in the array to the document

$(document).keypress(function(e) {
    if(currentSentence.charCodeAt(letterCount) === e.keyCode) { 
        $('#feedback').append('<span class = "glyphicon glyphicon-ok"></span>');
    }
    else {
        $('#feedback').append('<span class = "glyphicon glyphicon-remove"></span>');
    }
    $('#yellow-block').css('left', '+=17.5px'); // moves the highlight to the right when a key is press
    letterCount++; 

})




















/*variables for th timer 
let date;
let time;

$(document).keypress(function (e) {
    //starts a timer?
    let timer = false;
    if (timer === false) {
        date = new Date(); // makes a new date object with the current date and time
        time = date.getTime(); // returns a number value in milliseconds since 1970/01/01
        //timer = true;
    }

    if (e.keyCode === currentSentence.charCodeAt(letterCount)) {
        //let right = $('<span class="glyphicon glyphicon-ok"></span>')
        //$('#feedback').append(right); 
        //$('#yellow-block').css('left', '+=17.5px')
        //letterCount++;
        letter;
        $('#target-letter').append(letter);
    }
})*/
