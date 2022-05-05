const 
compChoice=randomNum0to5(),
selectionTable = document.getElementById('guesses'),
WinOrLoseRevealPic = document.getElementById('reveal'),
playAgainBtn = document.getElementById('play-again'),
choiceDisplay = document.getElementById('game-display'),
mistakeHighlight = document.getElementById('mistake'),
instructions = document.getElementById('instructions')

// eventlisteners
selectionTable.addEventListener('click',runGame)

// function
function randomNum0to5(){
  return Math.floor(Math.random()*6) + 1
}

function setErrorMsg(){
mistakeHighlight.style.color = 'red'
setTimeout(revertfunc, 2700)
}

function revertfunc(){
mistakeHighlight.style.color = 'lightgray'
}

function winOrLose(choice, status, color){
  switch(choice){
    case 1:
    finalOutput('Cat', status, color, `<img style = 'border: 5px solid ${color};' src="/animalpics/cat.jpeg" alt="Cat">`)
    break;
    case 2:
      finalOutput('Dog', status, color,`<img style = 'border: 5px solid ${color};' src="/animalpics/dog.jpeg" alt="Dog">`)
    break;
    case 3:
      finalOutput('Frog', status, color,`<img style = 'border: 5px solid ${color};' src="/animalpics/from.jpeg" alt="Frog">`)
    break;
    case 4:
      finalOutput('Butterfly', status, color,`<img style = 'border: 5px solid ${color};' src="/animalpics/butterfly.jpeg" alt="Butterfly">`)
    break;
    case 5:
      finalOutput('Dolphin', status, color,`<img style = 'border: 5px solid ${color};' src="/animalpics/dolphin.jpeg" alt="Dolphin">`)
    break;
    case 6:
      finalOutput('Orangutan', status, color,`<img style = 'border: 5px solid ${color};' src="/animalpics/orangutan.jpeg" alt="Orangutan">`)
    break;
  }
}

function finalOutput(animal, status, color, animalPic){
  instructions.remove()
  selectionTable.innerHTML = ''
  const newP = document.createElement('p')
  newP.textContent = `${animal} is ${status}!`
  newP.style.color = color
  choiceDisplay.innerHTML = animalPic
  choiceDisplay.appendChild(newP)
  playAgainBtn.innerHTML = `<button onClick = 'location.reload()' >Play Again!</button>`
}

function runGame(e){
  const choice = Number(e.target.id)
  if(choice){
    if(choice===compChoice){
      winOrLose(choice,'RIGHT', 'green')
    }else{
      winOrLose(choice,'WRONG', 'red')
    }
  }else{
    setErrorMsg()
  }
}

