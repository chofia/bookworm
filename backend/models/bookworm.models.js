var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var BookWormSchema = new mongoose.Schema({
    title: String,
    author: String,
    date: Date,
    status: String
})

BookWormSchema.plugin(mongoosePaginate)
const BookWorm = mongoose.model('Bookworm', BookWormSchema)

module.exports = BookWorm;