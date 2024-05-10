function inserir(num){ //<-- definido os numeros no html+criado um onclick onde iria retornar o numero de cada botao, um por um
    var numero = document.getElementById('resultado') . innerHTML;
    document.getElementById('resultado') . innerHTML = numero + num;
}

function limpar(){ //<-- aqui eu declarei uma função que apaga todos os numeros, pegando o id resultado e deixando vazio o entre aspas
    document.getElementById('resultado') . innerHTML = ""; 
}

function apagar(){ //<-- neste local eu criar uma função apagar, e no html eu criei um onclick para retirar os numeros
    var resultado =  document.getElementById('resultado') . innerHTML;
    document.getElementById('resultado') . innerHTML = resultado.substring (0, resultado.length -1)
}

function calcular(){ //<-- função onde ocorre todas as operações matematicas.
    var resultado =  document.getElementById('resultado') . innerHTML;
    if (resultado){
        document.getElementById('resultado') . innerHTML = eval(resultado)
    }
}