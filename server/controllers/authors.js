const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    all: function(req, res){
        Author.find({}, function(err, authors){
            if(err){
                console.log('Something went wrong when getting all authors');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: authors});
            }
        });
    },
    one: function(req, res){
        Author.findOne({_id: req.params.id}, function(err, author){
            if(err){
                console.log('Something went wrong when getting a single author');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: author});
            }
        });
    },
    create: function(req, res){
        Author.create(req.body, function(err){
            if(err){
                console.log('Something went wrong when creating a cake, detail: ', err);
                res.json({message: 'Error', error: err});
                // res.redirect('/authors');
            }else{
                res.redirect('/authors');
            }
        });
    },
    update: function(req, res){
        Author.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, { runValidators: true }, function(err){
            if(err){
                console.log('Something went wrong when updating a cake, detail: ', err);
                res.json({message: 'Error', error: err});
            }else{
                res.redirect(303, '/authors');
            }
        });
    },
    remove: function(req, res){
        Author.findOneAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.log('Something went wrong when updating a cake');
                res.json({message: 'Error', error: err});
            }else{
                Author.find({}, function(err, authors){
                    if(err){
                        console.log('Something went wrong when getting all cakes');
                        res.json({message: 'Error', error: err});
                    }else{
                        res.json({message: 'Success', data: authors});
                    }
                });
            }
        });
    },
};