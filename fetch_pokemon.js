const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let objeto = data.results;
    const container = document.getElementById("container");
    let crearDiv = "";
    for (let i = 0; i < objeto.length; i++) {
        if (objeto.length===0) {
            crearDiv += `</div><div class = "principal">`;
        }
      if (i % 5 === 0) {
        crearDiv += `</div><div class = "principal">`;
      }
      let namePok =objeto[i].name
      crearDiv += `<div class="element"><p><a href="${objeto[i].url}">${namePok.toUpperCase()}</a></p>  </div> `;
      console.log(i);
    }
    
    container.innerHTML = crearDiv;
    console.log(crearDiv);
  })
  .catch((err) => console.log(err));
