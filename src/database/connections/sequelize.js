import db from '../../models/index.js';

const connectSequelizeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log(`=============Sequelize========================`);
    console.log('Sequelize Successfully connected to the database.');
    console.log(`Database host: ${db.sequelize.config.host}`);
    console.log(`============================================`);
  } catch (error) {
    console.error('Unable to connect to the Sequelize database:', error);
  }
};

export default connectSequelizeDatabase;  