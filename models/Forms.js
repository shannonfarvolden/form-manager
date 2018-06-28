const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
  config: JSON,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("forms", formSchema);
