// Part Two - Movies App!
// Build an application that uses jQuery to do the following:

// 1.Contains a form with two inputs for a title and rating along with a button to submit the form.
// 2.When the form is submitted, capture the values for each of the inputs and append them to the DOM 
// along with a button to remove each title and rating from the DOM.
// 3.When the button to remove is clicked, remove each title and rating from the DOM.

//Further Study
// Ensure that the rating of a movie can only be between 0 and 10.
// Ensure that a title has at least 2 characters in it.
// Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.

function clarError(){
    $("#msg").text('');
    // clear error all class form lable.
    $("#movie-title").prev().removeClass('error');
    $("#movie-rating").prev().removeClass('error');
    $("#msg").prev().removeClass('error');

    function isformInputValid(){
        let validValues = false;
        let movieTitle = $("#movie-title")
        if(movieTitle){
            if(movieTitle.lenght > 1){
                validValues = true;
            }else{
                $("#msg").text("The movies title must be at least 2 chracter");
                $("#movie-title").prev().addClass("error");
            }
        }
    }
    // if the above moveis titles valid, than chack the rating 
    if(validValues){
        validValues = false;
        let movieRating = 0 + $("mavie-rating");
        if((movieRating.lenght >=0) &&(movieRating.lenght <=10)){
            validValues = true;
        }else{
            $("#msg").text("Rating movies must be between 0 to 10");
            $("#movie-rating").prev().addClass("error");
        }
    }
    return validValues;
}

function buildStarString(inRating) {

    let outRating = ("&#x2B50;").repeat(Math.round(inRating));

    return outRating;
};


// handle the button click for movies.
//$("#button-add").on('click', function(evt){
    $("#button-add").on("click", function (event){
    //$(evt.target).remove(evt);
    event.preventDefult();

    clearError();

    if (isformInputValid()) {

        // build:
        //  <div>
        //    "Title" star rating  <button>test button3</button>
        //  </div>
        let movieDetails = `"${$("#movie-title").val()}"&nbsp;&nbsp;`
        movieDetails = movieDetails + `  ${buildStarString($("#movie-rating").val())}`

        let $movieDiv = $("<div>").html(movieDetails).addClass("movie-details");
        $("<button>").text("X").addClass("rmvbutton").appendTo($movieDiv);
        $(".movies").append($movieDiv);

        // clear all inputs
        $('input').val('');

    }

});
// handle the delete button click
$(".movies").on("click", ".rmvbutton", function () {

    // the event is added to the movies container, but the button we need to 
    //  monitor for the click is .rmvbutton. 
    // Ironically, the rmvbutton class was created just to style the button!
    // jQuery properly determines 'this' is the button that was clicked so 
    //  no event.target rot is needed.

    //console.dir(event.target);
    //console.log($(this).parent())

    $(this).parent().remove();

});
