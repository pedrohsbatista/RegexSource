const text = "0 1 10 192 199 201 249 255 256 312 1010 1512";

var results = [];

//V1
//match(/(\b\d{1}\b|\b\d{2}\b|\b1[0-9]{2}\b|\b2[0-5]{1}((?<=5)[0-5]{1}|(?<!5)[0-9]{1})\b)/g);

//V2
match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g);

document.addEventListener("DOMContentLoaded", function() {    
    let element = document.getElementById("text");
    element.innerHTML = text;
    element = document.getElementById("results");
    results.forEach(function (result) {        
        result.pattern = result.pattern.toString().replaceAll("<", "&lt;");        
        element.innerHTML += `<p>Expressão: ${result.pattern} - Match: ${result.match ?? "sem combinação"}</p>`;
    })   
});

function match(pattern)
{   
    let matches = text.match(pattern);  
    let match = matches ? matches.map(x => `"${x}"`).join(", ") : undefined;   
    results.push({ pattern, match });
}