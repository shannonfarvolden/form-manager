const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
  config: JSON
});

mongoose.model("forms", formSchema);
