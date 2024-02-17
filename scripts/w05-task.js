/* W05: Programming Tasks */

/* Declare and initialize global variables */
//this function get the temple id to show on this div ( id's dont need # to call)
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
//this funcion create elements on the html to each temple on the list trought a loop
const displayTemples = (temples) => {
    temples.forEach(templo => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        h3Element.textContent = templo.templeName;
        const imgElement = document.createElement('img');
        imgElement.src = templo.imageUrl;
        imgElement.alt = templo.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/
//this function retrieves all temple from the server, trought the function fetch
//and them turn the info in a json file to be used on the script, them store the data
// on the displaytemples function
const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        if (!response.ok) {
            throw new Error('Error at retrieve temple data');
        }
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Chama a função getTemples para buscar os dados e exibir os templos, ela só parece
//vazia mas não é, dentro dela esta o codigo da linha 28, na verdade estamos chamando
//essa função declarando ela, e ela uma requisição assíncrona para a URL da API de templos e,
// em seguida, converte a resposta em formato JSON usando response.json(). Depois disso, os 
//templos são exibidos na página usando a função displayTemples.


getTemples();


/* reset Function */
//limpa os quadradinhos toda vez que o filtro é usado, para mostrar apenas
//os templos que foram solicitados
const reset = () => {
    const articleElements = templesElement.querySelectorAll('article');
    articleElements.forEach(article => {
        article.remove();
    });
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(templo => templo.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(templo => !templo.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(templo => new Date(templo.dedication) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.error("Invalid filter value");
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
