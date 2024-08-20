
// const { getPokemonById } = require('./js-foundation/06-promises')

import { buildLogger } from "./plugins/logger.plugin";

// getPokemonById(4)
//     .then((pokemon) => console.log({ pokemon }))
//     .catch((err) => console.log('Try again'))
//     .finally(() => console.log('Finalmente'));

const logger = buildLogger('app.ts')

logger.log('Hola mundo')
// logger.error('Algo paso')