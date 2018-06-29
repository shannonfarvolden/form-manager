const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Form = mongoose.model("forms");

module.exports = app => {
  app.get("/api/forms/:formId", requireLogin, async (req, res) => {
    const form = await Form.findById(req.params.formId);
    res.send(form);
  });

  app.get("/api/forms", requireLogin, async (req, res) => {
    const forms = await Form.find({ _user: req.user.id });
    res.send(forms);
  });
  app.post("/api/forms", requireLogin, (req, res) => {
    const { config } = req.body;
    //TODO: use real config from form
    config = {
      test: {
        mandatory: true
      }
    };
    const form = new Form({
      config,
      _user: req.user.id
    });
  });
};
