let page = 20
let js = 0


async function getAllPokemons() {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${page}&offset=${js}`);
  const data = await resp.json();


data.results.forEach(async function (item) {
  const respPoke = await fetch(item.url);
  const dataPoke = await respPoke.json();

    const tipes = dataPoke.types;

     const gopi = dataPoke.abilities



  
      const tipo1 = tipes[0];
      const tipo2 = tipes[1];
      const tipfinal ={ g : tipo1.type.name , h : tipo2.type.name} 

      const gopi1 = gopi[0].ability.name;
      const gopi2 = gopi[1].ability.name;
      const gopifinal ={ g : gopi1 , h : gopi2} 
      console.log(gopi1)
     
      document.querySelector(".tipo-dataPoke").textContent = tipfinal.g.toUpperCase() 

      document.querySelector(".tipo-dataPoke2").textContent = tipfinal.h.toUpperCase()

           
      document.querySelector(".gopi-dataPoke").textContent = gopifinal.g.toUpperCase() 

      document.querySelector(".gopi-dataPoke2").textContent = gopifinal.h.toUpperCase()
      

     var name = document.querySelector(".name-dataPoke")

     name.textContent = dataPoke.name ; 
 
 
     document.querySelector(".image-dataPoke").textContent = dataPoke.sprites.front_default
 
     document.querySelector(".id-dataPoke").textContent = dataPoke.id
 


      { 
      document.querySelector(".dataPoke-list").insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <img class="image-dataPoke" style="height: 200px"
            src=${dataPoke.sprites.front_default} alt=${`Imagem do ${dataPoke.name}`} />
            <div>
                <h2 class="name-dataPoke">${dataPoke.name}</h2>
                <p class="id-dataPoke">${dataPoke.id}</p>
                <h4>TIPO : </h4>
                <p class="tipo-dataPoke">${tipfinal.g.toUpperCase()} and ${tipfinal.h.toUpperCase()} </p>

                <h4>DESCRIÇÃO :</h4>
                <p class="tipo-dataPoke2"> Os principais golpes desse pokemom são  :</p>
                <p> </p>
                <p class="gopi-dataPoke">${gopifinal.g.toUpperCase()} </p>
                <p> </p>
                <p class="gopi-dataPoke2"> ${gopifinal.h.toUpperCase()} </p>
            
            </div>
        </div>
        `
      );}


      
  

  
})





}


getAllPokemons();
console.log(js)


function viewMore() {   

  

  js = js + 20 ;

  console.log(js)


  
 
  getAllPokemons();
}
