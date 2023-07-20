const text = `
ca	r
r	o s!
`;

var results = [];

match(/ca/g);

match(/ca\t/g);

match(/ca\tr/g);

match(/ca\tr\n/g);

match(/ca\tr\nr/g);

match(/ca\tr\nr\t/g);

match(/ca\tr\nr\to/g);

match(/ca\tr\nr\to\s/g);

match(/ca\tr\nr\to\ss!/g);

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