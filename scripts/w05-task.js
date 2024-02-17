/* W05: Programming Tasks */

/* Declare and initialize global variables */
//this const variable will get the element div on html by his id "#"
//using the dom method document.getelementbyid ( o id não precisa usar #)
const templesElement = document.getElementById('temples');

//now i declare a variable to hold an empty list
let templeList = [];

/* async displayTemples Function */
//This function will build a temple display "card" for each item in
// the temple list passed to the function.
//uses an arrow function to accept a list of temples as an array argument.

const displayTemples = (temples) =>{
    // Processar cada templo usando forEach
temples.forEach(templo => {
    // Criar um elemento <article>
    const articleElement = document.createElement('article');
  
    // Criar um elemento <h3> e adicionar o nome do templo
    const h3Element = document.createElement('h3');
    h3Element.textContent = templo.templeName;
  
    // Criar um elemento <img> e adicionar a URL da imagem e a localização como atributos
    const imgElement = document.createElement('img');
    imgElement.src = templo.imageUrl;
    imgElement.alt = templo.location;
  
    // Anexar <h3> e <img> como filhos de <article>
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
  
    // Anexar o <article> ao elemento templesElement global
    templesElement.appendChild(articleElement);
  });
}


/* async getTemples Function using fetch()*/
//the async function will get the server data  using fetch from the https adress
// Função assíncrona para buscar dados e exibir os templos
const getTemples = async () => {
    try {
      // Fazer uma requisição fetch para obter os dados dos templos
      const response = await fetch('U"https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"');
  
      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error('Error at retrieve temple data');
      }
  
      // Converter a resposta em um objeto JavaScript e atribuir à variável templeList
      templeList = await response.json();
  
      // Exibir os templos na página
      displayTemples(templeList);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  


  


/* reset Function */
// Função de expressão para limpar todos os elementos <article> do templesElement
const reset = () => {
    // Seleciona todos os elementos <article> dentro do templesElement
    const articleElements = templesElement.querySelectorAll('article');
  
    // Remove cada elemento <article> do DOM atravez de um loop
    articleElements.forEach(article => {
      article.remove();
    });
  };
  //esta função serve para remover da pagina todos os elementos dentro de
  //<article>, ela serve para que eu possa limpar os templos e mostrar
  //novos templos
  


/* filterTemples Function */
// Declare a function expression named filterTemples
const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();

    // Obtain the value of the HTML element with the ID of filtered
    const filter = document.querySelector("#filtered").value;

    // Use a switch statement that uses the filter value as the selector responding to four (4) cases
    switch (filter) {
        case "utah":
            // Filter for temples where the location contains "Utah" as a string
            displayTemples(temples.filter(templo => templo.location.includes("Utah")));
            break;
        case "notutah":
            // Filter for temples where the location does not contain "Utah" as a string
            displayTemples(temples.filter(templo => !templo.location.includes("Utah")));
            break;
        case "older":
            // Filter for temples where the dedicated date is before 1950
            displayTemples(temples.filter(templo => new Date(templo.dedication) < new Date(1950, 0, 1)));
            break;
        case "all":
            // No filter, just use temples as the argument
            displayTemples(temples);
            break;
        default:
            console.error("Invalid filter value");
    }
};


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
