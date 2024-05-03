const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        imgUrl: 'https://m.media-amazon.com/images/I/619ncDeLijL._SL1500_.jpg',
        alreadyRead: false
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        imgUrl: 'https://images.thalia.media/00/-/d2bd20cc4e1b4835ad6eee81b9ab2963/the-most-human-human-taschenbuch-brian-christian-englisch.jpeg',
        alreadyRead: true
    }
]

let booksFeed = books.map((book) => {
    return `
        <li>
            <p class="book-name"><em>${book.title}</em></p>
            <p>by <strong>${book.author}</strong></p>
            <img src="${book.imgUrl}" width="128">
        </li>
        `
}) 

function displayBooksFeed() {
    let ul = document.createElement("ul") 
    ul.innerHTML = booksFeed.join('')
    document.body.appendChild(ul)
}

displayBooksFeed()