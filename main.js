// var ol = document.querySelector("ol")

// fetch("https://jsonplaceholder.typicode.com/users")  // datani cekdik
// .then(response=>response.json())
// .then(data=>{

//     data.forEach(person=>{
//         ol.innerHTML+=`<li>${person.name}${person.email} </li>`
//     })
// })



var row = document.getElementsByClassName("row")[0];

function fillHTML(data) {
  data.forEach((element) => {
    row.innerHTML += `
        <div class="card col-3" style="width: 18rem;">
            <img src="${element.image.medium}" class="card-img-top" alt="${element.name}">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.rating.average}</p>
                <a href="details.html?id=${element.id}" class="btn btn-primary">Check Details</a>
            </div>
        </div>`;
  });
}

// $.ajax({
//   method: "GET",
//   url: "https://api.tvmaze.com/shows",
// }).done((data) => fillHTML(data));
$.ajax({
  method: "GET",
  url: "https://api.tvmaze.com/shows",
}).done((data) => {
  const limitedData = data.slice(0, 20);
  fillHTML(limitedData);
});

  