const codeOriginal = `
/*
 Imprimir resultado nota
*/
public class Program
{
    public static void Main()
    {
        int nota = Convert.ToInt32(Console.ReadLine());

        if (nota >= 7)
            Console.WriteLine("APROVADO");
        else
            Console.WriteLine("REPROVADO");
    }
}`;

var codeModified = codeOriginal;

applyColor("#B8946A", /(\".+\")/gi);

applyColor("#55899A", /(public|void|static|class|int)/g);

applyColor("#D8A0DF", /(if|else)/g);

applyColor("#40802A", /(program|convert|console)/gi);

applyColor("#DBDCAA", /(\.?\w+)(?=\()/gi);

applyColor("#57A64A", /(\/\*(\s|\S)*\*\/)/gim);

document.addEventListener("DOMContentLoaded", function() {    
    var element = document.getElementById("original");
    element.innerHTML = codeOriginal;
    var element = document.getElementById("modified");
    element.innerHTML = codeModified;
});

function applyColor(color, pattern)
{
    codeModified = codeModified.replaceAll(pattern, `<span style=\"color:${color}\">$1</span>`);
}