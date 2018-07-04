const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Form = mongoose.model("forms");

module.exports = app => {
  app.get("/api/forms/:formId", async (req, res) => {
    const form = await Form.findById(req.params.formId);
    res.send(form);
  });

  app.get("/api/forms", async (req, res) => {
    const forms = await Form.find({ _user: req.user.id });
    res.send(forms);
  });
  app.post("/api/forms", (req, res) => {
    console.log("hit post request");
    const config = req.body;
    console.log("config:", config);
    console.log("request:", req);
    const form = new Form({
      config
    });
    console.log(form);
  });
};
