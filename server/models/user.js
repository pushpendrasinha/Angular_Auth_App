const mongoose = require ('mongoose')

const Schema = mongoose.Schema
const userSChema = new Schema ({
	email: String,
	password: String
})

module.exports = mongoose.model('user', userSChema, 'users')