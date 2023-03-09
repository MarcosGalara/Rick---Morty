const app = require('./server')
const { sequelize } = require('../DB_connection.js')
const { saveApiData } = require('../controllers/saveApiData.js');
// NO TOCAR ESTE ARCHIVO

  sequelize.sync({ force: true }).then( async () => {
    console.log('DB connected');
    /* console.log(await saveApiData()); */ //para ver si trae bien a la base de datos todos los registros de cada char
    await saveApiData();

    app.listen(3001, () => {
      console.log('servidor escuchando en el puerto 3001')
    })
  }).catch((error) => {
    console.log(error);
  })
  
