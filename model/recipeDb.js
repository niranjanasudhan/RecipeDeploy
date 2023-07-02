const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://root:root@lib.zo6qogd.mongodb.net/recipe?retryWrites=true&w=majority")
    .then(() => {
        console.log("DB coneected")
    })
    .catch(err => console.log(err))

let Schema = mongoose.Schema;

const recipeSchema = new Schema({
    cuisineName: String,
    type: String,
    duration: String,
    servings: String,
    image: String

});

var recipeModel = mongoose.model("recipe", recipeSchema);
module.exports = recipeModel;