const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
]



let booksFeed = books.map((book) => {
    return `
        <div>
            <p>${book.title}</p>
            <p>${book.author}</p>
        </div>
        `
}) 



console.log(booksFeed)