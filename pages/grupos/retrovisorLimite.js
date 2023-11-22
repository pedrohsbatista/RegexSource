const text = `abcdefghijkll`;

var results = [];

match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\11/gi);

match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/gi);

match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\13/gi);

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