const text = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f";

var results = [];

test("9");

exec("9");

match(/[a-f]/g);

search(/[a-f]/g);

replace(/[a-f]/g);

split(/[a-f]/g);

document.addEventListener("DOMContentLoaded", function() {    
    let element = document.getElementById("text");
    element.innerHTML = text;
    element = document.getElementById("results");
    results.forEach(function (result) {        
        element.innerHTML += `<p>Método: ${result.method} - Expressão: ${result.pattern} - Match: ${result.match ?? "sem combinação"}</p>`;
    })   
});

function test(pattern)
{
   const method = "test";
   let regex = new RegExp(pattern);
   let match = regex.test(text);
   results.push({ method, pattern, match});
}

function exec(pattern)
{
   const method = "exec";
   let regex = new RegExp(pattern);
   let matches = regex.exec(text);   
   let match = matches ? matches.map(x => `"${x}"`).join(", ") : undefined;   
   results.push({ method, pattern, match }); 
}

function match(pattern)
{    
    const method = "match";
    let matches = text.match(pattern);  
    let match = matches ? matches.map(x => `"${x}"`).join(", ") : undefined;   
    results.push({ method, pattern, match });
}

function search(pattern)
{
    const method = "search";    
    let match = text.search(pattern);
    results.push({ method, pattern, match});
}

function replace(pattern)
{
    const method = "replace";    
    let match = text.replace(pattern, "!");
    results.push({ method, pattern, match});
}

function split(pattern)
{
    const method = "split";    
    let match = text.split(pattern);
    results.push({ method, pattern, match});
}