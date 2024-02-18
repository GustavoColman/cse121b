document.getElementById('searchButton').addEventListener('click', function() {
    const wordInput = document.getElementById('wordInput').value.trim();
    
    if (wordInput !== '') {
        getDefinitions(wordInput);
    } else {
        alert('Por favor, insira uma palavra válida.');
    }
});

function getDefinitions(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
            displayDefinitions(data);
        })
        .catch(error => console.error('Erro ao obter definições:', error));
}

function displayDefinitions(definitions) {
    const definitionList = document.getElementById('definitionList');
    definitionList.innerHTML = '';

    if (definitions.length > 0) {
        definitions.forEach(definition => {
            const listItem = document.createElement('li');
            listItem.textContent = definition.text;
            definitionList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'Nenhuma definição encontrada.';
        definitionList.appendChild(listItem);
    }
}


