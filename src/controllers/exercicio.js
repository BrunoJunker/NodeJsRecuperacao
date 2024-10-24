const ServiceExercicio = require('../services/exercicio')

class ControllerExercicio {
    calcularMediaPeso(req, res) {

        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const num3 = req.body.num3
            const num4 = req.body.num4
            const num5 = req.body.num5

            const resultado = ServiceApi.calcularMediaPeso(num1, num2, num3, num4, num5)

            res.status(200).send({ resultado })
        } catch (error) {
            console.error(error)
            res.status(400).send({ msg: error.message })
        }
    }


    calcularMedia(req, res) {
        try {
            const nota1 = req.body.nota1
            const nota2 = req.body.nota2
            const nota3 = req.body.nota3
            
            const resultado = ServiceApi.calcularMedia(nota1, nota2, nota3)

            res.status(200).send({ resultado })
        } catch (error) {
            console.error(error)
            res.status(400).send({ msg: error.message })
        }
    }

    calcularMediaPonderada(req, res) {
        try { 
        const nota1 = req.body.nota1
        const nota2 = req.body.nota2
        const nota3 = req.body.nota3
        const media = req.body.media
        const resultado = ServiceApi.calcularMediaPonderada(nota1, nota2, nota3, media)
        
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }
    imprimirTabuada(req, res) {
        try {
            const numero = req.body.numero
            const result = req.body.result
            const resultado = ServiceApi.calcularMediaPonderada(numero, result, nota3, media)
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }
    calcularImpostoRenda(req, res) {salarioMinimo, cpf, dependentes, rendaMensal, descontoDependentes, rendaTributavel, aliquota, imposto
        try {
            const salarioMinimo = req.body.salarioMinimo
            const cpf = req.body.cpf
            const dependentes = req.body.dependentes
            const rendaMensal = req.body.rendaMensal
            const descontoDependentes = req.body.descontoDependentes
            const rendaTributavel = req.body.rendaTributavel
            const aliquota = req.body.aliquota
            const imposto = req.body.imposto

            const resultado = ServiceApi.calcularMediaPonderada(salarioMinimo, cpf, dependentes, rendaMensal, descontoDependentes, rendaTributavel, aliquota, imposto)
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }
}

module.exports = new ControllerExercicio()