const text = `Todas chamadas:
 Recebida (17) 98765-4321
 Perdida 1731234567
 Realizada 11 998877665
`;

var results = [];

match(/\(?\d{2}\)?\s*\d+-?\d+/g)

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