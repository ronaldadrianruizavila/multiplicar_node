const fs = require('fs')
const colors = require('colors')

let listar = (base, limite) => {
    let data = ''
    for (let index = 0; index <= limite; index++) {
        data += ` ${base} * ${index} = ${base * index}\n`;
    }
    console.log(data.blue)
}

let multiplicar = async(base, limite) => {
    let data = ''
    for (let index = 0; index <= limite; index++) {
        data += ` ${base} * ${index} = ${base * index}\n`;
    }
    return data;
}

let crearArchivo = async(base, limite) => {
    let number = (Number(base) && Number(limite)) ? base : null;
    let data = (number !== null) ? await multiplicar(base, limite) : null;
    let nombreArchivo

    if (data != null) {
        nombreArchivo = `tablas/tabla-${base}.txt`
        fs.writeFile(nombreArchivo, data, (e) => {
            if (e) throw e
        })
        return nombreArchivo;
    } else {
        throw new Error('No es un numero')
    }



}

module.exports = {
    crearArchivo,
    listar
}