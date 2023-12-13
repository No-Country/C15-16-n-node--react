const { Sequelize } = require("sequelize");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

/////// CONEXION CON BASE DE DATOS LOCAL ///////
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/greencare`,
  {
    logging: false,
    native: false,
  }
);

/////// CONEXION CON BASE DE DATOS DEPLOY ///////

/*  const sequelize = new Sequelize(
  DB_DEPLOY,
  {
    logging: false,
    native: false,
  }
); 
 */
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

/////// ACA IMPORTAMOS LOS MODELOS ///////

const {
    User,
    Profile,
    Publication,
    Like,
    Posttag,
    Hashtag,
    Follower,
    Comment
} = sequelize.models;

/////// ACA VIENEN LAS RELACIONES ///////


//Usuario con Persona
User.hasOne(Profile);
Profile.belongsTo(User);

//Usuario con Seguidor
User.hasMany(Follower, { as: 'follower', foreignKey: 'followerId' });
User.hasMany(Follower, { as: 'following', foreignKey: 'followingId' });

//Usuario con Publicacion
User.hasMany(Publication);
Publication.belongsTo(User);

//Usuario con Reaccion
User.hasMany(Like);
Like.belongsTo(User);

//Usuario con comentario
User.hasMany(Comment);
Comment.belongsTo(User);

//Publiacion con Comentario
Publication.hasMany(Comment);
Comment.belongsTo(Publication);

//Publicacion con Reaccion
Publication.hasMany(Like);
Like.belongsTo(Publication);

//Publicacion con Posttag
Publication.hasMany(Posttag);
Posttag.belongsTo(Publication);

//Hashtag con Posttag
Hashtag.hasMany(Posttag);
Posttag.belongsTo(Hashtag);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};