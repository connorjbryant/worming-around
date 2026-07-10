jQuery(function($){

    var startBtn = $("#startBtn");
    var gameList = $("#gameList");

    // Generate a random number from 1 to 10 (gameList)
    const minAmt = 1;
    const maxAmt = 10;
    const randomUlNum =  Math.floor(Math.random() * (maxAmt - minAmt + 1)) + minAmt;

    // gameList list elements and their random index
    var gameLi = $("#gameList > li");
    var gameLiCount = gameLi.length;
    var randomLiIndex = Math.floor(Math.random() * gameLiCount);
    var randomLiRender = gameLi.eq(randomLiIndex);

    // For loop to append the list elements
    for (let i = 1; i <= randomUlNum; i++){
        $(gameLi).append(`<li>Bullet</li>`);
        randomLiRender.append(`<div class='worm'></div>`);
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