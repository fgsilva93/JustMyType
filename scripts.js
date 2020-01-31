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
//let currentLetter = currentSentence[letterCount]
let currentLetter = currentSentence.substring(letterCount, letterCount + 1);

$('#sentence').text(currentSentence); //it dislay a sentence from the array of sentences to the document
$('#target-letter').text(currentLetter); // it displays the letter of the setences in the array to the document

//let letter = currentLetter.substring(letterCount, letterCount + 1);
let timer = false;
let startDate;
let startTime;
let error = 0;
$(document).keypress(function (e) {

    if (currentSentence.charCodeAt(letterCount) === e.keyCode) {
        $('#feedback').append('<span class = "glyphicon glyphicon-ok"></span>');
        $('#yellow-block').css('left', '+=17.5px'); // moves the highlight to the right when a key is press
        letterCount++;
        currentLetter = currentSentence.substring(letterCount, letterCount + 1);
        $('#target-letter').text(currentLetter);

        if (timer === false) {
            startDate = new Date();
            startTime = start.getTime();
            timer = true;
        }

        if (letterCount === currentSentence.length) {
            arrayCount++; // moves to the next sentence in the array

            if (arrayCount === sentences.length) { // when you reach the end of the sentence array 
                let endDate = new Date();
                let endTime = endDate.getTime();
                let minutes = (endTime - startTime) / 60000
                let wpm = Math.round(54 / minutes - 2 * error);
                $('#feedback').append(`You got ${wpm}, Nice job!`);

                if ($('#feedback').text() == (`You got ${wpm}, Nice job!`)) {
                    setTimeout(restart, 5000)
                    // call on the function playagian
                }
                // function that ask if you want to play again?
                function restart() {
                    $('#feedback').text('Do you want to play again?')
                    $('#target-letter').append('<button class="btn btn-success" id="yes">Si</button>')
                    $('#target-letter').append('<button class="btn btn-success" id="no">No</button>')
                    $('#yes').click(function () {
                        location.reload();
                    })
                    $('#no').click(function () {
                        $('#target-letter').text('Thanks for playing i guess!')
                    })
                }
            }
            // use for the next sentence in the array of sentences
            else {
                currentSentence = sentences[arrayCount];
                $('#sentence').text(currentSentence);
                letterCount = 0;
                currentLetter = currentSentence.substring(letterCount, letterCount + 1);
                $('#target-letter').text(currentSentence);
                $('#yellow-block').css('left', '17.5px');
                $('#feedback').text(''); 
            } 
        }
    } else {
        $('#feedback').append('<span class = "glyphicon glyphicon-remove"></span>');
    }
})