let prueba = require('./multiplicar/multiplicar')
let argv = require('./configuracion/yargs')
const colors = require('colors')
let comando = argv._[0]

switch(comando){
    case 'listar':
        console.log("listar")
        prueba.listar(argv.base, argv.limite)
    break;
    case 'crear':
        console.log('crear')

        prueba.crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`el archivo`, ` tabla-${argv.base}-al-${argv.limite}.txt`.green, ` ha sido creado`))
            .catch(error => console.log(error))
    break;
    default:
        console.log('ERROR')
        console.log('comando no reconocido')
}



