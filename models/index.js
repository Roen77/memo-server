const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];
const db = {};
const Board=require('./board');
const Card=require('./card');
const Category=require('./category');
const User=require('./user');


// const sequelize = new Sequelize(config.database, config.username, config.password, config);
sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
);

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Board=Board;
db.Card=Card;
db.Category=Category;
db.User=User;

Board.init(sequelize);
Card.init(sequelize);
Category.init(sequelize);
User.init(sequelize);

Board.associate(db);
Card.associate(db);
Category.associate(db);
User.associate(db);



module.exports = db;
