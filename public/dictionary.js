// Store html content areas as variables
const content = document.getElementById("searchResult");

// Variable for form
const form = document.getElementById("searchForm")

// Variable for input field (word being searched)
const inputField = document.getElementById("searchWord")

// Variable for submit button
const submitBtn = document.getElementById("submitWord")

// Create the request for data collection using API
var request = new XMLHttpRequest();




//getData()



// Create a function to handle the data loading
// Running immediately on load because of .onload

//function getData(){
    
    submitBtn.addEventListener("click", function(){
        content.innerHTML = "";
        let wordInput = inputField.value;
        //console.log(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`)
        request.open('GET', `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`);
    
        request.onload = function (){
    
            // Check the outcome of the request
            if(request.status >= 200 && request.status < 400) {

                // Create variable to store response data
                let data = JSON.parse(this.response);

                // Create an element for the heading (entered word)
                let theWord = document.createElement('h2');

                theWord.textContent = data[0].word;

                content.appendChild(theWord)

                // If successful, process the data
                data.forEach(function(define){
                    renderDefine(define)
                });
    
                // Call function to display data as an object {Word, Definition, Synonyms}
    
            } else {
                // If unsuccessful, inform user
                console.log("API ERROR")
            }
    }
    
    
    // Send request to API server
    request.send();

    });

   



// Define function to display data
function renderDefine(define){

    // Empty array for synonyms to be pushed to
    var synonymList = []
    // For loop pushing synonyms into synonymList array
    for(i=0 ; i<define.meanings[0].synonyms.length; i++){
        synonymList.push(define.meanings[0].synonyms[i]);
    }

    // Create a div for the card
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    // // Create an element for the heading (entered word)
    // let theWord = document.createElement('h2');
    // theWord.textContent = define.word;

    // Create a smaller heading element for short definition
    let theDefinition = document.createElement('h5');
    theDefinition.textContent = define.meanings[0].definitions[0].definition;

    // Create a paragraph element for synonyms
    let theSynonyms = document.createElement('p');
    theSynonyms.textContent = synonymList

    // Append text elements to card div
    // card.appendChild(theWord);
    card.appendChild(theDefinition);
    card.appendChild(theSynonyms);

    // Append to content area
    content.appendChild(card);

}


