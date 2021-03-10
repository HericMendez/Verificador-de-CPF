

function quebraNumero(){
    var number = window.document.getElementById("cpf").value
    
    output = []
    sNumber = number.toString()

       

        for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i))
        }
    
        return output
    
    }
    
    
    function primeiroDigito(){
    
    var sequencia1 = new quebraNumero()
    
    mult = 10 
    var numbers = []
    var soma = 0
    
        for (var i=0; i<9; i++){
    
            numbers = sequencia1[i]*mult
            mult--
            soma += numbers
            //console.log(numbers)
            //console.log(soma)
    
        }
        digito1 = (11-(soma%11))
        //console.log(digito1)
        
        return digito1
    
    
    
    }
    
    
    function segundoDigito(){
    
        var sequencia2 = new quebraNumero()
    
    
    
        mult=11
        numbers = []
        soma=0
    
        for (var i=0; i<10; i++){
            numbers = sequencia2[i]*mult
            mult--
            soma+=numbers
    
        }
    
        digito2 = (11-(soma%11))
        //console.log(digito2)
        
        return digito2
    
    }
    
    
    function validaCPF(){
        var nome = document.getElementById("username").value

         resultado = document.getElementById("result")
        var showcpf = document.getElementById("cpf").value
        var data_nasc = document.getElementById("data-nasc").value
        var data_doc = document.getElementById("data-doc").value
 


        var r1 = primeiroDigito().toString()
        var r2 = segundoDigito().toString()
    
        var cpf = quebraNumero()

        
    
        n1 = cpf[9].toString()
        n2 = cpf[10].toString()
    
        resultCalc = r1+r2
        cpfInput = n1+n2
        console.log(resultCalc)
        //console.log(cpfInput)
        var valido = ''
        if(resultCalc===cpfInput){
            valido = 'O CPF inserido é válido!'
        }else{
            valido = 'O CPF inserido é inválido!'
        }
        

        resultado.innerHTML = `


        line-height: 50px;
        </style>
        <strong>Nome: </strong>${nome}<br>
        <strong>Nº do CPF:  </strong>${showcpf}<br>
        <strong>Data de Nascimento: </strong>${data_nasc}<br>
        <strong> Data de Emissão: </strong>${data_doc}<br>
        p${valido}`

    }


    //console.log(quebraNumero())
    
    //primeiroDigito()
    
    //segundoDigito()
    
