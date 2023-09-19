const text = `Lista de aprovados no vestibular 2023:
 Candidato A 01/01/2000 882.549.180-82
 Candidato B 15/07/1990 18386277076
 Candidato C 31/12/1995 476.619.790-98
`
var results = [];

match(/\b(\d{3}.?){3}(\d){2}/g);

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