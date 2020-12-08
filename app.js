const startGame = document.querySelector('.startgame__btn')
const playerName = document.querySelector('.user__name__field')
const user = document.querySelector('.user__name')
const userImage = document.querySelector('.user__img')
const buttons = document.querySelectorAll('.button')
const compImage = document.querySelector('.computer__img')
const userDisplay = document.querySelector('.user__score')
const compDisplay = document.querySelector('.comp__score')
const newGame = document.querySelector('.newgame__btn')
let userScore = 0
let compScore = 0

// Play the game
function play (e) {
  const playerChoice = e.target.id.toString()
  updatePlayerIcon(playerChoice)
  const computerChoice = computerSelection()
  updateComputerIcon(computerChoice)
  decideRoundWinner(playerChoice, computerChoice)
}

// Decide the winner of the game
function decideGameWinner (userScore, compScore) {
  if (userScore === 10) {
    document.querySelector('.game__message').innerHTML = `${playerName.value}, you won Rock, Paper, Scissors!! To play again press New Game!`
    buttons.forEach(button => {
      button.style.display = 'none'
    })
  } else if (compScore === 10) {
    document.querySelector('.game__message').innerHTML = 'Computer Wins The Game! To play again press New Game!'
    buttons.forEach(button => {
      button.style.display = 'none'
    })
  }
}
// Decide the winner of the round using a callback function to then determine the game winner
function decideRoundWinner (player, comp) {
  if (player === comp) {
    userScore++
    compScore++
    userDisplay.innerHTML = userScore
    compDisplay.innerHTML = compScore
    document.querySelector('.game__message').innerHTML = 'It\'s a tie!'
  } else if (player === 'rock' && comp === 'paper') {
    compScore++
    compDisplay.innerHTML = compScore
    document.querySelector('.game__message').innerHTML = 'Computer Wins this round!'
  } else if (player === 'rock' && comp === 'scissors') {
    userScore++
    userDisplay.innerHTML = userScore
    document.querySelector('.game__message').innerHTML = `${playerName.value}, you win this round!`
  } else if (player === 'paper' && comp === 'rock') {
    userScore++
    userDisplay.innerHTML = userScore
    document.querySelector('.game__message').innerHTML = `${playerName.value}, you win this round!`
  } else if (player === 'paper' && comp === 'scissors') {
    compScore++
    compDisplay.innerHTML = compScore
    document.querySelector('.game__message').innerHTML = 'Computer Wins this round!'
  } else if (player === 'scissors' && comp === 'rock') {
    compScore++
    compDisplay.innerHTML = compScore
    document.querySelector('.game__message').innerHTML = 'Computer Wins this round!'
  } else if (player === 'scissors' && comp === 'paper') {
    userScore++
    userDisplay.innerHTML = userScore
    document.querySelector('.game__message').innerHTML = `${playerName.value}, you win this round!`
  }
  decideGameWinner(userScore, compScore)
}

// Random number is chosen and assigned to a selection
function computerSelection () {
  const random = Math.floor(Math.random() * 3)
  if (random === 0) {
    return 'rock'
  } else if (random === 1) {
    return 'paper'
  } else if (random === 2) {
    return 'scissors'
  }
}

function updatePlayerIcon (selection) {
  if (selection === 'rock') {
    userImage.setAttribute('src', '../img/SVG/basecamp.svg')
  } else if (selection === 'paper') {
    userImage.setAttribute('src', '../img/SVG/paper-plane.svg')
  } else if (selection === 'scissors') {
    userImage.setAttribute('src', '../img/SVG/scissors.svg')
  }
}

// Change player Icon
function updateComputerIcon (selection) {
  if (selection === 'rock') {
    compImage.setAttribute('src', '../img/SVG/basecamp.svg')
  } else if (selection === 'paper') {
    compImage.setAttribute('src', '../img/SVG/paper-plane.svg')
  } else if (selection === 'scissors') {
    compImage.setAttribute('src', '../img/SVG/scissors.svg')
  }
}
/* ---------------- Start/New game --------------------- */
// New game button functionality
newGame.addEventListener('click', function () {
  user.innerHTML = 'User'
  document.querySelector('.game__message').innerHTML = 'Ready to play Rock, Paper, Scissors!'
  userDisplay.innerHTML = '0'
  compDisplay.innerHTML = '0'
  document.querySelector('.user__name__field').value = ''
  compImage.setAttribute('src', '../img/SVG/basecamp.svg')
  userImage.setAttribute('src', '../img/SVG/basecamp.svg')
})

// When player makes their selection
buttons.forEach(button => button.addEventListener('click', play))

/* Function to get user name */
startGame.addEventListener('click', function () {
  // 2. Get user name from the name field and change the html on the user side
  user.innerHTML = playerName.value
  // 3. Prompt the user for their selection
  document.querySelector('.game__message').innerHTML = `${playerName.value} make your selection!`
  // 4. Put buttons back after winning the game
  buttons.forEach(button => {
    button.style.display = 'block'
  })
  // Set scores back to zero
  userScore = 0
  compScore = 0
})
