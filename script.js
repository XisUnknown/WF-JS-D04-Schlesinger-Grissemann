var mydata = JSON.parse(books);
var title;
var author;
var read;
var p_title;
var p_author;
var p_read;

function createBook(){
    for(var i = 0;i<mydata.length;i++){
        title=mydata[i].title;
        author=mydata[i].author;
        read = mydata[i].read;
        p_title = document.createElement("p");
        p_author = document.createElement("p");
        p_read = document.createElement("p");
        p_title.innerHTML = title;
        p_author.innerHTML = author;
        p_read.innerHTML = read;
        document.getElementById("Book"+(i+1)).appendChild(p_title);
        document.getElementById("Book"+(i+1)).appendChild(p_author);
        document.getElementById("Book"+(i+1)).appendChild(p_read);
    }
}