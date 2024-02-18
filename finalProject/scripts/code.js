// interact with the button element, interacting whit the dom thing
document.getElementById('searchButton').addEventListener('click', function() {
    const wordInput = document.getElementById('wordInput').value.trim();
    
    //call the method
    if (wordInput !== '') {
        getDefinitions(wordInput);
        //woops, something go wrong
    } else {
        alert('please insert a valid word.');
    }
});
//calls the data from the api, turn it on a json and turn on readleble data
function getDefinitions(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
            displayDefinitions(data);
        })
        .catch(error => console.error('Erro at get definitions:', error));
}
//this method shows the worlds definitions on a list
function displayDefinitions(data) {
    const definitionList = document.getElementById('definitionList');
    definitionList.innerHTML = '';

    // defines data elements and call it in a loop to show
    //on the list
    if (data.length > 0) {
        data.forEach(entry => {
            const word = entry.word;
            const phonetic = entry.phonetic;
            const meanings = entry.meanings;

            //the appendchild method add a new child node to an existent
            //node in the dom tree ( it's a fancy way to say we are 
            //throwing more shit on the html)
            const wordItem = document.createElement('li');
            wordItem.textContent = `world: ${word} | Pronounce: ${phonetic}`;
            definitionList.appendChild(wordItem);

            meanings.forEach(meaning => {
                const partOfSpeech = meaning.partOfSpeech;
                const definitions = meaning.definitions;

                const partOfSpeechItem = document.createElement('li');
                partOfSpeechItem.textContent = `Classe gramatical: ${partOfSpeech}`;
                definitionList.appendChild(partOfSpeechItem);

                definitions.forEach(definition => {
                    const definitionItem = document.createElement('li');
                    definitionItem.textContent = `Definição: ${definition.definition}`;
                    definitionList.appendChild(definitionItem);
                });
            });
        });
    } else {
        //woops, something got wrong again
        const listItem = document.createElement('li');
        listItem.textContent = 'none definition find.';
        definitionList.appendChild(listItem);
    }
}



