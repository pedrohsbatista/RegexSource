const text = `
   Lista telefônica:
   - (21) 12345-6789
   - (11) 62300-2234
   - 5678-7771
   - (85)3333-7890
   - (1) 4321-1234
`;

var results = [];

match(/(\(\d{2}\)\s*)?\d{4,5}-\d{4}/gim);

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