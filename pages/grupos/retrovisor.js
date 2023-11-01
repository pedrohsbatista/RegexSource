// const text = `<b>Negrito</b>

// <strong>Ênfase</strong>

// <div>Conteúdo</div>`;

const text = `Lentamente é uma mente muito lenta.`;

var results = [];

match(/(lenta)(mente).*\2.*\1\./gi);

match(/(?:lenta)(mente).*\1/gi);

match(/(lenta)(mente)/gi)

match(/(lenta)(mente)?/gi)

replace(/(lenta)(mente)/gi, "Abc $2 def");

document.addEventListener("DOMContentLoaded", function() {    
    let element = document.getElementById("text");
    element.innerHTML = text;
    element = document.getElementById("results");
    results.forEach(function (result) {        
        result.pattern = result.pattern.toString().replaceAll("<", "&lt;").replaceAll(">", "&gt;");
        result.match = result.match.replaceAll("<", "&lt;").replaceAll(">", "&gt;");    
        element.innerHTML += `<p>Método: ${result.method} - Expressão: ${result.pattern} - Match: ${result.match ?? "sem combinação"}</p>`;
    })   
});

function match(pattern)
{   
    const method = "match";
    let matches = text.match(pattern);  
    let match = matches ? matches.map(x => `"${x}"`).join(", ") : undefined;   
    results.push({ method, pattern, match });
}

function replace(pattern, replace)
{
    const method = "replace";
    let match = text.replace(pattern, replace);
    results.push({ method, pattern, match });
}