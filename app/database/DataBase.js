/**
 * DataBase Configuration Class
 */
class DataBase{
	/**
	 * Constructor
	 */
	constructor(){
		this.config   = require('../config/config')
		this.objectId = require("mongodb").ObjectId
		this.client   = require("mongodb").MongoClient
		this.connect()
	}
	/**
	 * Return Connection String
	 */
	getConnString(config){
		return `mongodb://${config.dataBase.host}:${config.dataBase.port}/${config.dataBase.base}`;
	}
	/**
	 * Connect to DataBase
	 */
	connect(){
		this.client.connect(this.getConnString(this.config))
			.then(conn => this.connection = conn.db(this.config.dataBase.base))
			.catch(err => console.log(err))
	}
}

const dataBase = new DataBase()

module.exports = dataBase