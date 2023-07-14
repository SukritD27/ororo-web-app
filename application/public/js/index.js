var count = 0;
var number = 0;

var stuff = document.getElementById('main-stuff');

var url = "https://jsonplaceholder.typicode.com/albums/2/photos";

function badgeCreatorHTML(data){

    count++;
    number++;

    return `<div class="badge" onclick="fadeFunc(${count})" id="${count}">
    <img src="${data.thumbnailUrl}" alt="photo">
    <p>${data.title}</p>
</div>`
}

fetch(url)
    .then(function(response) { 
        return response.json();
    })
    .then(function(data) {
        var htmlString = '';
        data.forEach(photo => {
            htmlString += badgeCreatorHTML(photo);
        });
        stuff.innerHTML = htmlString;
    })
   
function fadeFunc(ev) {
     var div = document.getElementById(ev);
     div.style.opacity = 1;

     var fadeEffect = setInterval(function(){
         div.style.opacity -= 0.01;
         if(div.style.opacity < 0){
             clearInterval(fadeEffect);
             div.remove();
         }
     }, 2);
     
     number--;
}

    