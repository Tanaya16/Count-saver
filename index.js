
let countEl = document.getElementById("count-el")
let prevEl = document.getElementById("prev-el")

console.log(countEl)
console.log(prevEl)

let count = 0
function increment(){
    count += 1
    countEl.innerText = count
    console.log("clicked!")
    console.log(count)
}
function save(){
    let countStr = count + " -> "
    prevEl.textContent += countStr
    console.log("saved")
    console.log(count)

    // count = 0
    // countEl.innerText = count
    // console.log("cleared")
    // console.log(count)
}
function yeet(){
    count = 0
    countEl.innerText = count
    console.log("cleared!")
    console.log(count)
}
function rstart(){
    countEl.innerText = 0
    prevEl.textContent = "Previous save was : "
    console.log("cleared!")
    console.log("restart!")
    console.log(count)
}