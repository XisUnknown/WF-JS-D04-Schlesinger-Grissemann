var title;
var author;
var read;
var p_title;
var p_author;
var p_read;


function createBook(){
    for(var i = 0;i<books.length;i++){
        console.log(books[0]);
        title=books[i].title;
        author=books[i].author;
        read = books[i].read;
        console.log(title);
        p_title = document.createElement("p");
        p_author = document.createElement("p");
        p_read = document.createElement("p");
        p_title.innerHTML = title;
        p_author.innerHTML = author;
        p_read.innerHTML = read;
        document.getElementById("book"+(i+1)).appendChild(p_title);
        document.getElementById("book"+(i+1)).appendChild(p_author);
        document.getElementById("book"+(i+1)).appendChild(p_read);
    }
}
createBook();