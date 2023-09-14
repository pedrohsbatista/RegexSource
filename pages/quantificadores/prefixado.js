const text = "A música é arte e a poesia também. 1 2 3 11 12 13 101 102 103";

var results = [];

match(/\d{2}/g);

match(/\d{2,3}/g);

match(/\d{2,}/g);

match(/[\wúé]{6}/g);

match(/[\wúé]{2,4}/g);

match(/[\wúé]{2,}/g);

match(/\b\d{2}\b/g);

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