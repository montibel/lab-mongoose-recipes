const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  },
  ingredients: {
    type: [String]
  },
  cuisine: {
    Type: String
  },
  dishType: {
    Type: String 
  },
  image: {
  Type: String,
  default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    Type: Number,
    min: 0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    default: Today
  }
  
  


});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
