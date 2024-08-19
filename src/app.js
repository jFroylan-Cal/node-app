const { buildLogger } = require('./plugins')
const { getPokemonById } = require('./js-foundation/06-promises')

getPokemonById(4)
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.log('Try again'))
    .finally(() => console.log('Finalmente'));

const logger = buildLogger('app.js')

logger.log('Hola mundo')
logger.error('Algo paso')