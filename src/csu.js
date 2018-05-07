
export default function convertir(magnitud, entrada, salida) {
    // Se define el factor de conversión 1 Lb = 0.45359237 Kg
    const factor = 0.45359237

    // Si queremos convertir libras a kilogramos entrada tomará el valor lb y salida kg
    if (entrada == "lb" && salida == "kg") {
        return (magnitud * factor).toFixed(8)
    }

    // Si queremos convertir kilogramos a libras entrada tomará el valor kg y salida lb
    if (entrada == "kg" && salida == "lb"){
        return (magnitud / factor).toFixed(8)
    }

}
