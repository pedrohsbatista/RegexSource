//const text = `O José Simão é muito engraçado... hehehehehe`;

const text = `http://www.site.info www.escola.ninja.br google.com.ag`;

var results = [];

match(/(he)+/gi);

match(/(http:\/\/)?([\w\.])+/gi);

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