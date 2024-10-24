class ServiceExercicio {
    calcularMediaPeso(num1, num2, num3, num4, num5) {
            if(isNaN(num1) || isNaN(num2)|| isNaN(num3)|| isNaN(num4)|| isNaN(num5)) {
                throw new Error("informe somente números")
            }
            return (num1 + num2 + num3 + num4 + num5) / 5
        }

    calcularMedia(nota1, nota2, nota3) {  
        if(isNaN(nota1) || isNaN(nota2)|| isNaN(nota3)){
            throw new Error("informe somente números")
        }
         
        let mensagem;  
        if (media >= 7) {  
            mensagem = "Aprovado";  
        } else if (media >= 5) {  
            mensagem = "Recuperação";  
        } else {  
            mensagem = "Reprovado";  
        }     
    return (nota1 + nota2 + nota3) / 3 + mensagem
    
       
    }  
    calcularMediaPonderada(nota1, nota2, nota3, media){         
        if(isNaN(nota1) || isNaN(nota2)|| isNaN(nota3)){
            throw new Error("informe somente números") 
        }
        const media = (nota1*2 + nota2*3 + nota3*5) / 10;
    
        
       return res.send("Média = "+ media)
    }
    
    imprimirTabuada(numero, result) {  
        if(isNaN(numero)){
            throw new Error("informe somente números")
        }

         for (let i = 0; i <= 10; i++) {  
            let result = numero * i;  
        }
        return (result) 
    }  
    
    calcularImpostoRenda(salarioMinimo, cpf, dependentes, rendaMensal, descontoDependentes, rendaTributavel, aliquota, imposto) { 
        if(isNaN(salarioMinimo) || isNaN(cpf)|| isNaN(rendaMensal)|| isNaN(descontoDependentes)|| isNaN(rendaTributavel)){
            throw new Error("informe somente números") 
        }
               let descontoDependentes = 0.05 * salarioMinimo * dependentes;  
        let rendaTributavel = rendaMensal - descontoDependentes;  
    
        let aliquota;  
        let imposto;  
    
        if (rendaTributavel <= 2 * salarioMinimo) {  
            aliquota = 0; // Isento  
            imposto = 0;  
        } else if (rendaTributavel <= 3 * salarioMinimo) {  
            aliquota = 0.05; // 5%  
            imposto = rendaTributavel * aliquota;  
        } else if (rendaTributavel <= 5 * salarioMinimo) {  
            aliquota = 0.10; // 10%  
            imposto = rendaTributavel * aliquota;  
        } else if (rendaTributavel <= 7 * salarioMinimo) {  
            aliquota = 0.15; // 15%  
            imposto = rendaTributavel * aliquota;  
        } else {  
            aliquota = 0.20; // 20%  
            imposto = rendaTributavel * aliquota;  
        }  
        return (`CPF: ${cpf}`,`Renda Mensal: R$ ${rendaMensal.toFixed(2)}`, `Número de Dependentes: ${dependentes}`, `Desconto por Dependente: R$ ${(descontoDependentes).toFixed(2)}`,
         `Renda Tributável: R$ ${rendaTributavel.toFixed(2)}`, `Alíquota: ${(aliquota * 100).toFixed(2)}%`, `Imposto a Pagar: R$ ${imposto.toFixed(2)}` )
       
        }  
  









    
}

// module.exports = ServiceExercicio -> const exercicio = new ServiceExercicio()
module.exports = new ServiceExercicio()