const text = `João é calmo, mas no trânsito fica nervoso.`;

var results = [];

match(/[\wÀ-ú]+/gi);

match(/[\wÀ-ú]+(?=,)/gi);

match(/[\wÀ-ú]+(?=\.)/gi);

match(/[\wÀ-ú]+(?=, mas)/gi);

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