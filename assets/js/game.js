/* var playerName = window.prompt("What is your robot's name?"); //assign var playerName to window prompt "what is ur robot's name?"
// Note the lack of quotation marks around playerName
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");

//this will do math and log 20
console.log(10 + 10);

// what is this?
console.log("Our robot's name is " + playerName);

window.alert("This is an alert! JavaScript is running!"); //window alert "JS is running"

function fight() {
    window.alert("The fight has begun!"); //window alert "the fight has begun"
}

// fight();
*/


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {



    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");


    var promptFight = window.prompt("Do you want to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


    // if player chooses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // remove enemy's health by subtacting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

            // if player chooses to skip

        } else if (promptFight === "skip" || promptFight === "SKIP") {
            /* window.alert(playerName + " has chosen to skip the fight!");
            playerMoney = playerMoney - 2;
            window.alert("You are leaving the game.");
            console.log(
                adf
            ) */
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

    };


fight ();

