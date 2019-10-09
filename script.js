var title;
var author;
var read;
var p_title;
var p_author;
var p_read;
var book_img;
var div_create;

function createBook(){
    for(var i = 0;i<books.length;i++){
        title=books[i].title;
        author=books[i].author;
        read = books[i].read;
        div_create = document.createElement("li");
        book_img = document.createElement("img");
        p_title = document.createElement("p");
        p_author = document.createElement("p");
        p_read = document.createElement("p");
        div_create.setAttribute("id","book"+(i+1));
        book_img.setAttribute("src",("./img/"+(i+1)+".jpg"));
        p_title.innerHTML = title;
        p_author.innerHTML = author;
        p_read.innerHTML = read;
        switch(books[i].read) {
            case "true" : p_read.style.background = "rgb(0,255,0)";
            break;
            default : p_read.style.background = "rgb(255,0,0)";
            break;
        }
        document.getElementById("list").appendChild(div_create);
        document.getElementById("book"+(i+1)).appendChild(book_img);
        document.getElementById("book"+(i+1)).appendChild(p_title);
        document.getElementById("book"+(i+1)).appendChild(p_author);
        document.getElementById("book"+(i+1)).appendChild(p_read);
    }
}
createBook();