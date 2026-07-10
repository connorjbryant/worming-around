jQuery(function($){

    var player = $(".player");

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
        $("#gameList").eq(0).append(`<li class="player">Player</li>`);
        $(this).hide();
    });

    $(document).on("keydown", function(e){
        // Prevent arrow keys from scrolling the browswer window
        if(["ArrowUp", "ArrowDown"].indexOf(e.key) > -1){
            e.preventDefault();
        }
        switch (e.key){
            case "ArrowUp":
                moveUp();
                break;
            case "ArrowDown":
                moveDown();
                break;
        }
    });

    function moveUp(){
        var player = $(".player");
        if (!player.length) return; // Stop the game if player is null

        // Get the parent li index
        var currentIndex = $player.parent().index();

        // Move up if we're not at the top (index 0)
        if (currentIndex > 0){
            $("#gameList li").eq(currentIndex - 1).append($player);
        }
    }

    function moveDown(){
        var player = $(".player");

        if (!player.length) return; // Stop the game if player is null

        var currentIndex = player.parent().index();
        var totalLi = $("#gameList li").length;

        // Move down if we're not at the last index
        if (currentIndex < totalLi - 1){
            $("#gameList li").eq(currentIndex + 1).append(player);
        }
    }
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