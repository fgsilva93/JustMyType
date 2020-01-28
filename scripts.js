let $upperkeys = $('#keyboard-upper-container'); 
let $lowerKeys = $('#keyboard-lower-container');

// can delete the click function, it will still work. 
($upperkeys).click(function() {
    $('#keyboard-upper-container').hide();
});

($lowerKeys).keydown(function() {
    if(which === 16) {
        $(upperKeys).show();
        $(lowerKeys).hide();
    }
})

/*($upperKeys).keyup(function () {

})*/