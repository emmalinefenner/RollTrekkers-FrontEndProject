// scroll to top of page on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
// add class "active" to selected nav item to indicate location
$(function(){
    $('.navbar a').click(function () {
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
     });
 });

//  collapse expanded hamburger menu when nav item clicked
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
        $('.navbar').css("background-color", "rgb(105,105,105, .5)"); //return navbar background to transparent on click
    }
});

// change background of navbar to opaque when hamburger menu drops down
$('.navbar-toggler').click(function() {
    $('.navbar').css("background-color", "rgb(105,105,105)");

});


//****************Haggle App ****************


var button = $('.rollDie');
$(".rollDie").click(function() {
    
    // validate Modifier and Offer Input 
    var modifier = $("#modifier").val();
    var offer = $("#offer").val();
    if($("#offer").val().trim().length == 0) {
        $('#popup').html(
            '<div class="alert alert-danger alert-dismissible fade show" role="alert"><h1>Where is your offer?</h1><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' 
        );
    }else if(modifier>10){
        $('#popup').html(
            '<div class="alert alert-danger alert-dismissible fade show" role="alert"><h1>That modifier is suspiciously high. 10 is the most we have heard of. Honesty is the best policy!</h1><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' 
        );
        $("#modifier").val("");
    } else if(offer<10) {
        $('#popup').html(
            '<div class="alert alert-danger alert-dismissible fade show" role="alert"><h1>Cheapskate alert! No Deal.</h1><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' 
        );
        $("#offer").val("");
    } else {
        // var 'die' simulates rolling a 20 sided die
        var die = {
            sides: 20,
            roll: function () {
              var randomNumber = Math.floor(Math.random() * this.sides) + 1;
              return randomNumber;
            }
          }

        // get Customer's roll result plus modifier and RollTrekkers' roll result
        var rollTrekResult = die.roll();
        var custResult = die.roll();
        var custFinalResult = parseInt(custResult) + parseInt(modifier); 
        // show what the dice rolls were in the console
        console.log("Customer's roll was: ", custResult, "Modifier:", modifier, "RollTrekkers' roll was:", rollTrekResult);

        if(custFinalResult>rollTrekResult) {
            $('#popup').html(
                '<div class="alert alert-danger alert-dismissible fade show" role="alert"><h1>Very convincing! We have a deal!</h1><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' 
            );
            // clear radios and inputs
            $("#modifier").val("");
            $("#offer").val("");
            $('#haggle label').each(function() { $(this).removeClass('active');});
        } else {
            $('#popup').html(
                '<div class="alert alert-danger alert-dismissible fade show" role="alert"><h1>Sorry, We are not convinced. No Deal.</h1><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' 
            );
            // clear radios and inputs
            $("#modifier").val("");
            $("#offer").val("");
            $('#haggle label').each(function() { $(this).removeClass('active');});
        }
    }
})
    // clear alert div if modal is closed before closing alerts
  
    $('.close').click(function() {
        $('#popup').html('');
    
    });
  
 