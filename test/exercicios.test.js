const { calcularMedia, calcularMediaPonderada, imprimirTabuada, calcularImpostoRenda } = require('../service/exercicios')
const { describe, it, expect } = require('@jest/globals')


describe('ServiceExercicio', () => {  
    const service = new ServiceExercicio();  

    test('calcularMediaPeso - deve calcular a média de pesos corretamente', () => {  
        const mockPrompt = jest.spyOn(global, 'prompt')  
            .mockImplementationOnce(() => '70') // peso da pessoa 1  
            .mockImplementationOnce(() => '80') // peso da pessoa 2  
            .mockImplementationOnce(() => '60') // peso da pessoa 3  
            .mockImplementationOnce(() => '75') // peso da pessoa 4  
            .mockImplementationOnce(() => '90'); // peso da pessoa 5  

        service.calcularMediaPeso();  
        
        
        const consoleSpy = jest.spyOn(console, 'log');  
        service.calcularMediaPeso();  
        expect(consoleSpy).toHaveBeenCalledWith('A média do peso das 5 pessoas é: 75.00 kg');  
        
        mockPrompt.mockRestore();  
        consoleSpy.mockRestore();  
    });  

    test('calcularMedia - deve calcular a média e status do aluno corretamente', () => {  
        const mockPrompt = jest.spyOn(global, 'prompt')  
            .mockImplementationOnce(() => '7')  // nota 1  
            .mockImplementationOnce(() => '8')  // nota 2  
            .mockImplementationOnce(() => '5'); // nota 3  

        const consoleSpy = jest.spyOn(console, 'log');  
        service.calcularMedia();  
        expect(consoleSpy).toHaveBeenCalledWith("A média do aluno é:", 6.67);  
        expect(consoleSpy).toHaveBeenCalledWith("Aprovado");  

        mockPrompt.mockRestore();  
        consoleSpy.mockRestore();  
    });  

    test('calcularMediaPonderada - deve calcular a média ponderada corretamente', () => {  
        const mockPrompt = jest.spyOn(global, 'prompt')  
            .mockImplementationOnce(() => '6')  // nota 1  
            .mockImplementationOnce(() => '7')  // nota 2  
            .mockImplementationOnce(() => '9'); // nota 3  

        const consoleSpy = jest.spyOn(console, 'log');  
        service.calcularMediaPonderada();  
        expect(consoleSpy).toHaveBeenCalledWith("A média ponderada do aluno é:", 7.45);  

        mockPrompt.mockRestore();  
        consoleSpy.mockRestore();  
    });  

    test('imprimirTabuada - deve imprimir a tabuada corretamente', () => {  
        const mockPrompt = jest.spyOn(global, 'prompt')  
            .mockImplementationOnce(() => '5'); // Número para a tabuada  
        
        const consoleSpy = jest.spyOn(console, 'log');  
        service.imprimirTabuada();  
        
        expect(consoleSpy).toHaveBeenCalledWith(`Tabuada do 5:`);  
        expect(consoleSpy).toHaveBeenCalledWith("5 x 0 = 0");  
        expect(consoleSpy).toHaveBeenCalledWith("5 x 1 = 5");  
        expect(consoleSpy).toHaveBeenCalledWith("5 x 10 = 50");  
        
        mockPrompt.mockRestore();  
        consoleSpy.mockRestore();  
    });  

    test('calcularImpostoRenda - deve calcular imposto corretamente para contribuinte isento', () => {  
        const mockPrompt = jest.spyOn(global, 'prompt')  
            .mockImplementationOnce(() => '12345678909') // CPF  
            .mockImplementationOnce(() => 0)  // Dependentes  
            .mockImplementationOnce(() => '1500'); // Renda Mensal  

        const consoleSpy = jest.spyOn(console, 'log');  
        service.calcularImpostoRenda();  

        expect(consoleSpy).toHaveBeenCalledWith(`CPF: 12345678909`);  
        expect(consoleSpy).toHaveBeenCalledWith(`Renda Mensal: R$ 1500.00`);  
        expect(consoleSpy).toHaveBeenCalledWith(`Número de Dependentes: 0`);  
        expect(consoleSpy).toHaveBeenCalledWith(`Desconto por Dependente: R$ 0.00`);  
        expect(consoleSpy).toHaveBeenCalledWith(`Renda Tributável: R$ 1500.00`);  
        expect(consoleSpy).toHaveBeenCalledWith(`Alíquota: 0.00%`);  
        expect(consoleSpy).toHaveBeenCalledWith(`Imposto a Pagar: R$ 0.00`);  

        mockPrompt.mockRestore();  
        consoleSpy.mockRestore();  
    });  
});