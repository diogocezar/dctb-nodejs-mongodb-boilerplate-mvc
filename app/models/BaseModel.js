/**
 * This class will be extended by all Models
 */
class BaseModel{
	constructor(collection) {
		this.collection = collection;
		this.db         = require('../database/database');
	}
	findOne(id, callBack){
		this.db.connection.collection(this.collection).findOne({
			_id: new this.db.objectId(id)
		}, callBack)
	}
	findAll(callBack){
		this.db.connection.collection(this.collection).find({}).toArray(callBack)
	}
	insert(itemInsert, callBack){
		this.db.connection.collection(this.collection).insert(itemInsert, callBack)
	}
	deleteOne(id, callBack){
		this.db.connection.collection(this.collection).deleteOne({
			_id: new this.db.objectId(id)
		}, callBack)
	}
	updateOne(id, itemUpdate, callBack){
		this.db.connection.collection(this.collection).updateOne({
				_id: new this.db.objectId(id)
			}, {
				$set: itemUpdate
			},
			callBack
		)
	}
}

module.exports = BaseModel