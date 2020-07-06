    // Pseudocode...

    // *Game States*
    // "WIN" - Player robot has defeated all enemy robots
    //   * Fight all enemy robots
    //   * Defeat each enemy robot
    // "LOSE" - Player robot's health is zero or less.
    // if the enemy robot's health is zero or less, exit from the fight loop.


    // 7/05
    // make alert window asking player if they want to play again after defeating last robot
    // create prompt relating to 'shop' feature

    // wrap the game logic in a startGame() function
    // when the player is defeated or there are no more enemies, call an endGame() function that:
    //
    //     alerts the player's total stats
    //     asks the player if they want to play again
    //     if yes, call startGame() to restart the game
    //
    //
    // after the player skips or defeats an enemy (and there are still more robots to fight):
    //
    //     ask the player if they they want to 'shop'
    //     if no, continue as normal
    //     if yes, call the shop() function
    //     in the shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop
    //     if refill, subtract money points from player and increase health
    //     if upgrade, subtract money point from player and increase attack power
    //     if leave, alert goodbye and exit the function
    //     if any other invalid option, call shop() again
    //
    // this is how we'll proceed:
    //
    //     add the startGame() function to define (and reset) the state of the game.
    //     add the endgame() function to display stats and prompt the user to play again.
    //     finalize the MVP and switch branches
    //     add the shop() function for all shop-related logic.
    //     save our progress by using Git.


    // player stats
    var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;


    // You can also log multiple values at once like this
    console.log(playerName, playerAttack, playerHealth);


    // enemy stats
    var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    var enemyHealth = 50;
    var enemyAttack = 12;

    var fight = function() {

        while(enemyHealth > 0 && playerHealth > 0) {

            // FIGHT or SKIP prompt
            var promptFight = window.prompt("Do you want to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


            if (promptFight === "fight" || "FIGHT") {


                // damage enemy by subtacting the amount set in the <playerAttack> variable
                enemyHealth = enemyHealth - playerAttack;
                console.log(
                    playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
                )


                // remove player's health
                // from damage taken by enemy by subtracting the amount set in the <enemyAttack> variable
                playerHealth = playerHealth - enemyAttack;
                console.log(
                    enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );


                // check player's health
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                    window.alert("You have lost your robot in battle! Game Over!");
                    break;
                } else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }

                // enemy's health stat
                if (enemyHealth <= 0) {
                    window.alert(enemyNames[i] + " has died!");
                    fight();
                } else {
                    window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
                }


            }


            if (promptFight === "skip" || promptFight === "SKIP") {
    
                // confirm if you really want to quit
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                
                // if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    // subtract money from playerMoney for skipping
                    playerMoney = playerMoney - 10;
                    console.log("playerMoney", playerMoney);
                    break;
                }
                    
                // if no (false), ask question again by running fight() again
                else {
                    fight();
                }

            }
            

            else {
                window.alert("You need to pick a valid option. Try again!");
            }

        }
    }


    // startGame function
    var startGame = function() {

        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        // enemyNames array iterator
        for (var i = 0; i < enemyNames.length; i ++) {
            if (playerHealth > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

                var pickedEnemyName = enemyNames[i];

                enemyHealth = 50;

                fight(pickedEnemyName);

            }
            else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }

        }

        // play again
        endGame();
    
    }

    var endGame = function() {
        //if the player is still alive, player wins!
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        }
        else {
            window.alert("You've lost your robot in battle.");
        }

        // ask the player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            // restart the game
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    };



startGame();