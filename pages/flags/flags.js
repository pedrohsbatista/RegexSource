const text = "Carlos assinou o abaixo-assinado.";

var results = [];

match(/C|ab/);

match(/c|ab/i);

match(/ab|c/gi);

match(/z|w/gi);

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