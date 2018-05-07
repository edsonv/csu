const expect = require('chai').expect
const convertir = require('..').default

describe('#csu', function () {

    it('Si queremos convertir libras a kilogramos entrada tomará el valor lb y salida kg ', function () {
        const resultado = convertir(20, "lb", "kg")
        expect(resultado).to.equal('9.07184740')
    })

    it('Si queremos convertir kilogramos a libras entrada tomará el valor kg y salida lb ', function () {
        const resultado = convertir(25, "kg", "lb")
        expect(resultado).to.equal('55.11556555')
    })

})
