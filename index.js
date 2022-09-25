//document.getElementById("count-el").innerText=7
//let count be 0
// let firstbBatch=5
// let secondBatch=99
// let count=firstbBatch+secondBatch
// let myAge =25
// let humanRatio= 7
// let godsDogAge= myAge*humanRatio
// console.log(godsDogAge)
// function increment(){
//     console.log("The button was clicked")
// }

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
// countdown()

// function blue(){
//     console.log(42)
// }
// blue()

// let lap1=34
// let lap2=33
// let lap3=36

// function lapTime(){
//     let lapTime=lap1+lap2+lap3            Let varibles are block scoped
// console.log(lapTime)
// }
// lapTime()

//OOORRRRR

// let lap1=34
// let lap2=33
// let lap3=36

// function lapTime(){
//     console.log(lap1+lap2+lap3)
// }
// lapTime()

// let lapsCompleted=0

// function incrementLap(){
//     lapsCompleted=lapsCompleted+1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)


//camelCase // This is also a function//DOM Document Object Model aka how you us js to modify a websit)
//let countEl= document.getElementById("count-el")//Called pass in argument the.(the variables in brakets)
//console.log(countEl) //We're passing in what variables we want to log to the console. If we didn't the log function wouldnt know what to log

//intialize the count as 0
//let count=0


//incrment the count variable when button is (clicked log it out)
//function increment(){
//   count=count+1
//Inner text means text on the inside >0< on hmtl page
//   countEl.innerText=count
//}

// function save(){
//     console.log(count)
// }


//let username= "Shorty"
//let message="You have three new notifications"
//console.log(username+", "+message+"!")//concatinate//this one way to do it
//let messageToUser=message+", "+username+"!"
//console.log(messageToUser)

//let name="Big God "//You can add spae inside of quotations with this method
//let greeting="You are the best"//These are called strings

//let myGreeting= name+greeting+"!"
//console.log(myGreeting)

// console.log(4+5) //9
// console.log("2"+"4") //"24" this is a string
// console.log("5"+1) //"51" String always win out over numbers
// console.log(100+"100") //"100100"

//let welcomeEl = document.getElementById("welcome-el")

//let name= "Per Harald Borgen"
//let greeting= "Welcome back"

//welcomeEl.innerText=greeting + name

let saveEl= document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0
console.log(saveEl)

function increment(){
    //count=count+1
    count+=1 //plus equal
    countEl.innerText=count
}

function save() {
    let countStr = count + " - "
    //Rendered the variable in the saveEl using innerText
    saveEl.textContent += countStr
    //Change from innertext to textContent to get html to render spaces and such.
    
    //Setting the count back to 0 after pressing save button
    countEl.textContent=0
    count=0
  
}

//inner text alternative mdn (Mozilla Developer Networks) node=html element(kinda)