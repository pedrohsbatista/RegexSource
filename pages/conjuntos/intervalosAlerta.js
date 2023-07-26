const text = "A,B,C,D,E [a,b,c,d,e] A-E 1,2,3,4,5,6";

var results = [];

match(/[b-d]/g)

match(/[b-d]/gi)

match(/A-E/g)

match(/[A-z]/g)

match(/[A-Za-z]/g)

match(/[0-9]/g)

match(/[3-5]/g)

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