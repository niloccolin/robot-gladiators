    // Pseudocode...

    // *Game States*
    // "WIN" - Player robot has defeated all enemy robots
    //   * Fight all enemy robots
    //   * Defeat each enemy robot
    // "LOSE" - Player robot's health is zero or less.



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



    var fight = function(enemyName) {

        while(enemyHealth > 0) {

            // FIGHT or SKIP prompt
            var promptFight = window.prompt("Do you want to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


            // if player chooses to fight
            if (promptFight === "fight" || promptFight === "FIGHT") {

                // remove enemy's health by subtacting the amount set in the playerAttack variable
                enemyHealth = enemyHealth - playerAttack;
                console.log(
                    playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
                );

                // check enemy's health
                if (enemyHealth <= 0) {
                    window.alert(enemyNames[i] + " has died!");
                } else {
                    window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
                }

                // remove player's health by subtracting the amount set in the enemyAttack variable
                playerHealth = playerHealth - enemyAttack;
                console.log(
                    enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );

                // check player's health
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                } else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }

                    // if player chooses to skip

                } else if (promptFight === "skip" || promptFight === "SKIP") {

                    // confirm if you really want to quit
                    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

                    
                    // if yes (true), leave fight
                    if (confirmSkip) {
                        window.alert(playerName + " has decided to skip this fight. Goodbye!");
                        // subtract money from playerMoney for skipping
                        playerMoney = playerMoney - 2;
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

        // enemy name list iterator
        var i;
        for (i = 0; i < enemyNames.length; i += 1) {
          /*debugger; */
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            // call fight function
            fight(pickedEnemyName);
        }


