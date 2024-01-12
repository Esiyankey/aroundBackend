const Sequelize = require ("sequelize")


// creating a connection to the postgres Database

const sequelize = new Sequelize('aroundDatabase','postgres','password',{
    host:' localhost',
    dialect:'postgres'
})


// using sequelize .authenticate to establish the connection and logging whether it was successfull or not 
sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connection successful");
  })
  .catch((error) => {
    console.log(error);
  });


  module.exports={sequelize}