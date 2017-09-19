// This shout(string) function receives one argument and returns it in all caps
function shout(string){
  if (typeof string === 'string'){
    return string.toUpperCase()
  } else {
    console.log("Please Enter an argument of type string")
  }
}
//console.log(shout(3))
//console.log(shout('Tango'))

// This whisper(string) function receives one argument and returns it in all lowercase
function whisper(string){
  if (typeof string === 'string'){
    return string.toLowerCase()
  } else {
    console.log("Please Enter an argument of type string")
  }
}

// This logShout(string) function calls console.log() with its one argument in all caps
function logShout(string){
  console.log(shout(string))
}

//This logWhisper(string) function calls console.log() with its one argument in all lowercase
function logWhisper(string){
  console.log(whisper(string))
}

// This sayHiToGrandma(string) function returns conditional based outputs
function sayHiToGrandma(string){
  if ()
}


console.log(sayHiToGrandma('HELLO'))
console.log(sayHiToGrandma('hello'))
console.log(sayHiToGrandma('I love you, Grandma.'))
