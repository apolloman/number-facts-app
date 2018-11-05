let fact = document.getElementById('fact-output'),
    factText = document.getElementById('fact-text'),
    numberInput = document.getElementById('number-input'),
    // yearFacts = document.querySelector('.year-facts'),
    // numberFacts = document.querySelector('.number-facts'),
    number;



// Request With Fetch it is better way for request
function getRequest() {
    const url = `http://numbersapi.com/${number}/year`;
    fetch(url).then(function (response) {
        return response.text();
    }).then(function (data) {
        factText.innerText = data;
    }).catch(function () {
        console.log("Something get Wrong!");
    });
}


numberInput.addEventListener('change', function () {
    number = numberInput.value;
    fact.style.display = 'block';
    getRequest();
});

numberInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        number = numberInput.value;
        getRequest();
    }
});


// OLD Way AJAX Request with XHR Object
// numberInput.addEventListener('change', function(e) {
//     number = numberInput.value;
//     fact.style.display = 'block';

//     const XHR = new XMLHttpRequest();
//     XHR.onload = function() {
//         if(this.status === 200) {
//             factText.textContent = this.responseText;
//         }
//     };

//     XHR.open('GET', `http://numbersapi.com/${number}/year`, true);
//     XHR.send();
// });
