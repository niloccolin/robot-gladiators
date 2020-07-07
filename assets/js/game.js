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



    // function to generate a random numeric value
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);


        return value;
    }

    var fight = function(enemy) {

        while(enemy.health > 0 && playerInfo.health > 0) {

            // FIGHT or SKIP prompt
            var promptFight = window.prompt("Do you want to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

            if (promptFight === "skip" || promptFight === "SKIP") {
    
                // confirm if you really want to quit
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                
                // if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                    // subtract money from playerInfo.money for skipping
                    playerInfo.money = Math.max(0, playerInfo.money - 10);
                    console.log("playerInfo.money", playerInfo.money);
                    break;
                }
                // if no (false), ask question again by running fight() again
                else {
                    fight();
                };
            }
            else if (promptFight === "fight" || promptFight === "FIGHT") {


                //generate random damage on enemy based on player's attack power
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

                enemy.health = Math.max(0, enemy.health - damage);

                console.log(
                    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
                )


                //generate random damage on player based on enemy's attack power
                var damage = randomNumber(enemy.attack - 3, enemy.attack);


                playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);

                console.log(
                    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                );


                // check player's health
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + " has died!");
                    window.alert("You have lost your robot in battle! Game Over!");
                    break;
                } else {
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                };

                // enemy's health stat
                if (enemy.health <= 0) {
                    window.alert(enemy.name + " has died!");
                    fight();
                }
                else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                };
            }
            else {
                window.alert("You need to pick a valid option. Try again!");
            };
        }
    }      
    
    // startGame function
    var startGame = function() {

        // reset player stats
        playerInfo.reset();

        // enemy name array iterator
        for (var i = 0; i < enemyInfo.length; i ++) {
            
            if (playerInfo.health > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
                
                var pickedEnemyObj = enemyInfo[i];

                pickedEnemyObj.health = randomNumber(40, 60);

                fight(pickedEnemyObj);
            }
            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                    // ask if user wants to use the store before next round
                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                    // if yes, take them to the store() function
                    if (storeConfirm) {
                    shop();
                }
            }
            else if (playerInfo.health <= 0) {
                window.alert("You have lost your robot in battle! Game over!");
                break;
            };

        }

        // play again if game is over and done
        endGame();
    
    }

    function endGame() {
        //if the player is still alive, player wins!
        if (playerInfo.health > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
        }
        else {
            window.alert("You've lost your robot in battle.");
        };

        // ask the player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            // restart the game
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        };

    };

    function shop() {
        // ask the player what they'd like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );

        // use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL": // new case
            case "refill":
                playerInfo.refillHealth();
                break;
            case "UPGRADE": // new case
            case "upgrade":
                playerInfo.upgradeAttack();
                break;
            case "LEAVE": // new case
            case "leave":
                window.alert("Leaving the store.");

                // do nothing, so function will end
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");

                //call shop() again to force player to pick a valid option
                shop();
                break;
        };
    };


    // player stats
    var playerInfo = {
        name: window.prompt("What is your robot's name?"),
        health: 100,
        attack: 10,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        }, // comma!
        refillHealth: function() {
            if (this.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
        },
        upgradeAttack: function() {
            if (this.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                this.attack += 6;
                this.money -= 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
        }
    }


    // You can also log multiple values at once like this
    console.log(playerInfo.name, playerInfo.attack, playerInfo.health);


    // enemy stats
    var enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        }
    ];

startGame();

/*
console.log(Math.PI);

console.log(Math.round(4.4));

console.log(Math.sqrt(25));

console.log(Math.max(10, 20, 100));

console.log(Math.max(0, -50));
*/