const text = `1,2,3,4,5,6,a.B c!    D?e-
G_h`;

var results = [];

match(/\d/g) // números [0-9]

match(/\D/g) // não números [^0-9]

match(/\w/g) // caracteres [a-zA-Z0-9_]

match(/\W/g) // não caracteres [^a-zA-Z0-9_]

match(/\s/g) // espaços em brancos [ \n\t\r\f]

match(/\S/g) // espaços não brancos [^ \n\t\r\f]

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