const text = `supermercado superação hiperMERCADO mercado`;

var results = [];

match(/(?:super)[\wÀ-ú]+/gi);

match(/(?<!super)mercado/gi);

document.addEventListener("DOMContentLoaded", function() {    
    let element = document.getElementById("text");
    element.innerHTML = text;
    element = document.getElementById("results");
    results.forEach(function (result) {  
        result.pattern = result.pattern.toString().replaceAll("<", "&lt;").replaceAll(">", "&gt;");
        result.match = result.match.replaceAll("<", "&lt;").replaceAll(">", "&gt;");        
        element.innerHTML += `<p>Expressão: ${result.pattern} - Match: ${result.match ?? "sem combinação"}</p>`;
    })   
});

function match(pattern)
{   
    let matches = text.match(pattern);  
    let match = matches ? matches.map(x => `"${x}"`).join(", ") : undefined;   
    results.push({ pattern, match });
}