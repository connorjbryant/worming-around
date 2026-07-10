jQuery(function($){

    // Generate a random number from 1 to 10
    const minAmt = 1;
    const maxAmt = 10;
    const randomNum =  Math.floor(Math.random() * (maxAmt - minAmt + 1)) + minAmt;

    // For loop to append the list elements
    for (let i = 1; i <= randomNum; i++){
        $("#gameList").append(`<li>Item #${i}</li>`);

        var gameLi = $("#gameList li").length.random();
        console.log(gameLi);
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