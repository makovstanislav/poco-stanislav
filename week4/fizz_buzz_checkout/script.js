for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i.toString() + " Power Coders")
    } else if ( i % 3 === 0) {
        console.log("Power")
    } else if ( i % 5 === 0) {
        console.log("Coders")
    }
}