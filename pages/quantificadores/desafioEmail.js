const text = `Os seguintes usuários não confirmaram os termos:
  usuarioa@gmail.com
  USER_B@UOL.COM.BR
  c.def@gov.com.br
`;

var results = [];

match(/\w.+@\w.+/gi);

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