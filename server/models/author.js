module.exports = function(mongoose){
    const AuthorSchema = new mongoose.Schema({
        name: {type: String, default: '', required: [true, 'Author name cannot be blank!'], minlength: [3, 'Author name must be at least 3 characters long!']},
    }, {timestamps: true});
    mongoose.model('Author', AuthorSchema);
};