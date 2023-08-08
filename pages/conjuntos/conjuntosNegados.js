const text = "1,2,3,4,5,6,a.B c!D?e"

var results = [];

match(/\D/g);

match(/[^0-9]/g);

match(/[^\d]/g);

match(/[^\d,.!?\s]/g);

match(/[^!-/:-@\s]/g);

document.addEventListener("DOMContentLoaded", function() {    
    let element = document.getElementById("text");
    element.innerHTML = text;
    element = document.getElementById("results");
    results.forEach(function (result) {        
        element.innerHTML += `<p>Expressão: ${result.pattern} - Match: ${result.match ?? "sem combinação"}</p>`;
    })   
});

function match(pattern)
{   
    let matches = text.match(pattern);  
    let match = matches ? matches.map(x => `"${x}"`).join(", ") : undefined;   
    results.push({ pattern, match });
}