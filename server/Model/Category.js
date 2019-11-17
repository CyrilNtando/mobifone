const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['Category Name is Required'],
    unique: true,
    maxlength: [100, 'A Category name must have less or equal 100 characters']
  }
});
