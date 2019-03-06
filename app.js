const { crearArchivo, listar } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs')
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(response => console.log(`Archivo creado: ${response.green}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido')
        break;
}


/*let argv2 = process.argv;
let parametro = argv[2]

let base = parametro.split('=')
*/