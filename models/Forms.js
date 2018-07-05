const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
  title: String,
  config: JSON,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  createdDate: Date
});

mongoose.model("forms", formSchema);
