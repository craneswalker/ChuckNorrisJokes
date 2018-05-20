const chuckAPI = 'https://api.icndb.com/jokes/random'
const jokesAPI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
const form = document.querySelector("form")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  whichJokes()
})

function whichJokes(response){
  const jokeType = document.querySelector("select")
  const queryRole = jokeType.value
  console.log(queryRole)
  if(queryRole == "all"){ 
    getAllJokes()
  }else if(queryRole == "chuck"){
    getChuckJokes()
  }else{
    getOtherJokes()
}

function getAllJokes(){
  let randNum = Math.floor(Math.random() * 2)
  if(randNum == 0){
    getChuckJokes()
  }
  else{
    getOtherJokes()
  }
}

function getChuckJokes(){
  let chuckPics = [
    'assets/chuck1.jpg', 
    'assets/chuck2.jpg', 
    'assets/chuck3.jpg', 
    'assets/chuck4.jpg', 
    'assets/chuck5.png'
  ]
  fetch(chuckAPI)
  .then(function(response){
    return response.json()
  })
  .then(function(response){
    const setupField = document.querySelector(".setup")
    const jokeField = document.querySelector(".joke")
    const chuckPic = chuckPics[Math.floor(Math.random()*chuckPics.length)]
    const imgTag = document.querySelector("img")
    setupField.textContent = ''
    jokeField.textContent = response.value.joke
    imgTag.src = chuckPic
  })
  }
}

function getOtherJokes(){
  fetch(jokesAPI,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(function(response){
    return response.json()
  })
  .then(function(response){
    const setupField = document.querySelector(".setup")
    const jokeField = document.querySelector(".joke")
    const imgTag = document.querySelector("img")
    setupField.textContent = response.setup
    jokeField.textContent = response.punchline 
    imgTag.src = ''
  })
}

