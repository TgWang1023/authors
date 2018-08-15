const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors')
require('../models/author.js')(mongoose);