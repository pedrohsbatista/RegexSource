const text = `dia diafragma diatônico, média wikipédia bom-dia melodia radial`;

var results = [];

match(/\bdia\b/gi);

match(/(\S)*dia(\S)*/gi);

match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi);

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