const text = `dia diatonico diafragma media wikipedia bom_dia melodia radial`;

var results = [];

match(/\bdia\w+/gi);

match(/\bdia\w*/gi);

match(/\w+dia\b/gi);

match(/\w*dia\b/gi);

match(/\b\w+dia\w+\b/gi);

match(/\b\w*dia\w*\b/gi);

match(/\bdia\b/gi);

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