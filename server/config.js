require('dotenv').config();

const MONGODB= process.env.MONGODB;
const PORT = process.env.PORT;


module.exports = {

    MONGODB,
    PORT,

};