const mongoose = require('mongoose')
const env = require('./env')
const node_env = process.env.NODE_ENV || 'development';
const db = env[node_env].DBNAME;

module.exports = {
  connect : ()=> mongoose.connect(env[node_env].HOST+db),
  db,
  connection:()=>{
    if (mongoose.connection) {
      return mongoose.connection;
      return this.connect();
    }else {
    	console.log("error");
    }
  }
}
