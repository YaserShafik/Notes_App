const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})

module.exports = mongoose.model("Note", noteSchema);