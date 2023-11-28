const text = `
Leo é um cara legal
Emanuel foi morar em Sergipe
Bianca é casada com Habib.
`;

var results = [];

match(/\n/gi);

match(/^(\w).+\1$/gi);

match(/^(\w).+\1$/gim);

match(/^(\w).+\1\.$/gim);

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