const books = [
    {
        title: 'The Design of EveryDay Things' ,
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

let booksFeed = function () {
    let booksFeed = books.map((book, index) => {
        return `
            <li style="background-color: ${book.alreadyRead && '#DCE5BE'}">
                <p class="book-name"><em>${book.title}</em></p>
                <p>by <strong>${book.author}</strong></p>
                <img src="${book.imgUrl}" width="128">
                <div class="isReadWrapper">
                    <input type="checkbox" id="${index}" name="${book.title}" ${book.alreadyRead ? 'checked' : ''} onchange="updateIsReadStyles(checked, name)"/>
                    <label for="isRead">Mark as read</label>
                </div>
            </li>
            `
    })
    return booksFeed
}

function displayBooksFeed(feed) {
    let main = document.querySelector('main')
    main.firstChild && main.removeChild(main.firstChild)
    let ul = document.createElement("ul") 
    ul.innerHTML = feed.join('')
    main.appendChild(ul)
}

function updateIsReadStyles(checked, name) {
    // Update alreadyRead's value in the database 
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === name) {
            books[i]['alreadyRead'] = checked
        }
    }
    
    // Create new feed
    let updatedBooksFeed = booksFeed()
    console.log(updatedBooksFeed[1])

    // Render new feed
    displayBooksFeed(updatedBooksFeed)
}

displayBooksFeed(booksFeed())