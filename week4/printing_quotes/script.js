let quote = prompt("Please input a quote:")
let author = prompt("Who is the author?")

if (quote && author) {
    console.log(`${author} says, "${quote}"`)
} else {
    console.log("Please provide both a quote and an author.")
}


