const text = `
 Inválidos:
 192.268.0.1
 1.333.1.1
 192.168.0.256
 256.256.256.256

 Válidos:
 192.168.0.1
 127.0.0.1
 10.0.0.255
 10.11.12.0
 255.255.255.255
 0.0.0.0
`;

var results = [];

match(/(\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\.?\b){4}/gm);

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