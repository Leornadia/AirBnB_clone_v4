function toggleReviews() {
    var reviewsDiv = document.getElementById("Reviews");
    var toggleSpan = document.getElementById("toggleReviews");
    
    if (toggleSpan.innerText === "show") {
        // Fetch, parse, and display reviews
        // Add code to fetch reviews from the server and display them

        // Change text to "hide"
        toggleSpan.innerText = "hide";
    } else {
        // Remove all Review elements from the DOM
        // Add code to remove all review elements from the DOM
        
        // Change text to "show"
        toggleSpan.innerText = "show";
    }
}

