const capitalizeString = (str) => 
    str.toLowerCase()
.split(" ")
.map((word)=>word[0].toUpperCase() + word.slice(1))
.join(" ")

console.log(capitalizeString("hellow WoRld"))