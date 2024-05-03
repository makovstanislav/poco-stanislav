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
            <p style="display:inline"><strong>Book: </strong>${book.title}</p>
            <p style="display:inline"><strong>Author: </strong>${book.author}</p>
        </div>
        `
}) 

function displayBooksFeed() {
    document.body.innerHTML = booksFeed.join('')
}

displayBooksFeed()