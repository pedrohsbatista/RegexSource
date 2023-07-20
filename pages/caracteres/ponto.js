const text = "1,2,3,4,5,6X7,8.8,8.9,10";

var results = [];

match(/1.2/g);

match(/1\.2/g);

match(/6.7/g);

match(/1..2/g);

match(/1..,/g);

match(/8../g);

match(/.\../g);

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