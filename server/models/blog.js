var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    short_name: String,
    name: String,
    short_desc: String,
    content: String,
    created_at: { type: Date, default: Date.now }
});

blogSchema.add({
    category: String,
    video: Boolean,
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Blog', blogSchema);

