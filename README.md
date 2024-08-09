# Memory Card - Bob's Burgers Memory Card Game

## Description

"Awl-right" here we go! We're going to be making a Bob's Burgers themed memory card game. This game will use images from the Bob's Burgers Free API: https://www.bobsburgersapi.com/documentation to retrieve images and information for the generated cards. I will pre-pick several characters to return from the api data.

## Components:

- GameBoard:
- Game cards
- Scoreboard: Current score and best score

The game will have a starting menu. The user will have to click "Play Game" to start.
There will be a rules modal popup somewhere that explains the rules.
Once the user clicks "Start" then the display will show
The goal is to click all of the individual cards without clicking a duplicate card.
There is a counter below that shows 1/10 cards for example the user has to click. The counter will increase as unique cards are clicked.
If a user clicks a card that has already been clicked a popup modal will appear and tell the user that they've lost and give them the option to play again. The game will reset.

We might want to use TDD to create the gameboard logic.

We can have a special button to populate all of the cards that have stats on them.

## How is the game logic going to work?

The state of the cards can be created and stored in a cardState. This will have a cardId, name, img, and selected:false. If a card is selected then selected becomes true. There will be a check when a card is clicked to see if this is already true. If it is, then gameOver() will call.

gameOver() function will send modal to show score and replay button. IT will also disable onclicks everywhere else on the screen.

retreiving the data from the api.
Fetch specific characters. extract their data and then place them into a state variable as an object list.

The cards data will be stored in an object array stack. How will the cards be populated on the gameboard?
We can have a function called populateGameBoard(characterList). When this is called, it will take the characterList and randomize them in an array. Then it will push them off a stack one at a time, rendering them on the board. There are more characters in the list than there are cards on the board.
Easy: display 3 cards on the board with 5 cards total. There must be at least one card where the user hasn't selected yet or selected==='false'. To do that, at the end we could do a simple check that says "if we iterate through and find one character where selected ==='false', then continue, else, recall the populateGameBoard function?"
