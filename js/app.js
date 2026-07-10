jQuery(function($){

    // Generate a random number from 1 to 10
    const minAmt = 1;
    const maxAmt = 10;
    const randomNum =  Math.max(1, Math.floor(Math.random() * (maxAmt - minAmt) + 1) + minAmt);

    // For loop to append the list elements
    for (let i = 1; i <= randomNum; i++){
        $("#gameList").append(`<li>Item #${i}</li>`);
    }

    // Put worm on random list element
    var gameLiTotal = $("#gameList li").length;
    var randGameLi = Math.floor(Math.random() * gameLiTotal);

    $("#gameList li").eq(randGameLi).append(`<div class="worm"></div>`);

    $("#startBtn").on("click", function(){
        $("#gameList").append(`<li>Player</li>`);
        $(this).hide();
    });
});

/**
 * Ideas
 * 
 * Movement
 * 
 * $(document).on("keydown", function(e){
        switch (e.key){
            case "ArrowLeft":
                //function maybe moveLeft();
                break;
            case "ArrowRight":
                // maybe moveRight();
                break;
        }
    })
 */