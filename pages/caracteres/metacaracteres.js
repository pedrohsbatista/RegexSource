const text = "1,2,3,4,5,6,a.b c!d?e";

var results = [];

split(/\./);

split(/,|\.|\?|!| /g);

document.addEventListener("DOMContentLoaded", function() {    
    let element = document.getElementById("text");
    element.innerHTML = text;
    element = document.getElementById("results");
    results.forEach(function (result) {        
        element.innerHTML += `<p>Expressão: ${result.pattern} - Match: ${result.match ?? "sem combinação"}</p>`;
    })   
});

function split(pattern)
{
    let matches = text.split(pattern);
    let match = matches ? matches.map(x => `"${x}"`).join(", ") : undefined;   
    results.push({ pattern, match});
}