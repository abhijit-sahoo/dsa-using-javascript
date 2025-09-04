const reverseInt = (n) => {
    const reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-398797759847557));