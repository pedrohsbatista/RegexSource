const text = "1,2,3,4,5,6,a.b c!d?e";

var results = [];

split(/,/);

match(/,/);

match(/,/g);

match(/A/);

match(/A/g);

match(/A/i);

match(/A/gi);

match(/2/g);

match(/b c!d/g);

document.addEventListener("DOMContentLoaded", function() {    
    let element = document.getElementById("text");
    element.innerHTML = text;
    element = document.getElementById("results");
    results.forEach(function (result) {        
        element.innerHTML += `<p>Metódo: ${result.method} - Expressão: ${result.pattern} - Match: ${result.match ?? "sem combinação"}</p>`;
    })   
});

function split(pattern)
{
    const method = "split";    
    let matches = text.split(pattern);
    let match = matches ? matches.map(x => `"${x}"`).join(", ") : undefined;   
    results.push({ method, pattern, match});
}

function match(pattern)
{   
    const method = "match"; 
    let matches = text.match(pattern);  
    let match = matches ? matches.map(x => `"${x}"`).join(", ") : undefined;   
    results.push({ method, pattern, match });
}