const fs = require('fs');
const colors = require('colors')

let prueba = {} 

prueba.listar = (base, limite) => {

    console.log("==========================".green)
    console.log(`=== Tabla del ${base} ====`.green)
    console.log("==========================".green)


    console.log(`tabla del ${base} hasta el ${limite}`)
    for(let i = 0; i <= limite; i++){
        resultado = base * i
        console.log(`${base} * ${i} = ${resultado}\n`)
    }
}
prueba.crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) =>{
        
        let data = '';

        for(let i = 0; i <= limite; i++){
            resultado = base * i
            data +=  `${base} * ${i} = ${resultado}\n`
        }


        // usamos este metodo para crear un archivo .txt con el contenido que dese
        // documentacion: https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
        fs.writeFile(`resultadosMultiplicar/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                 reject(err);
            }else{
                resolve(`tabla-${base}-al-${limite}.txt`)
            }
        });
        console.log(`tabla del ${base} hasta el ${limite}`)

    })
}

module.exports = prueba

