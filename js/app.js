jQuery(function($){

    var player = $("<div class='player-worm'></div>");
    // Get the parent li index
    var currentIndex = player.parent().index();

    // Random number generator 1-10
    var randomNum = Math.floor(Math.random() * 10) + 1;

    // List item generation
    for (var i = 1; i <= randomNum; i++){
        $("#gameList").append("<li>" + i + "</li>");
    }

    var gameItems = $("#gameList > li");

    var choices = gameItems.not(":eq(" + currentIndex + ")");

    // Friend worm goes on an li element besides the player one
    var randomFriendIndex = choices.eq(Math.floor(Math.random() * choices.length));

    gameItems.eq(randomFriendIndex).append('<div class="worm friend-worm"></div>');

    $("#startBtn").on("click", function(){
        // Player goes on first list item
        gameItems.eq(0).append(player);
        
        $(this).hide();
    });

    $(document).on("keydown", function(e){
        // Avoid movement logic if player is null
        if (!player.parent("li").length){
            return;
        }

        switch (e.key) {
            case "ArrowUp":
                e.preventDefault();
                moveUp();
                break;
            case "ArrowDown":
                e.preventDefault();
                moveDown();
                break;
        }
    });

    function moveUp(){
        var currentLi = player.parent("li");
        var previousLi = currentLi.prev("li");

        if (previousLi.length){
            player.appendTo(previousLi);
        }
    }

    function moveDown(){
        var currentLi = player.parent("li");
        var nextLi = currentLi.next("li");

        if (nextLi.length){
            player.appendTo(nextLi);
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