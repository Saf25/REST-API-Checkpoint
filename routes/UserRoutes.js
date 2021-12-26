let express = require("express");
let router = express.Router();
let user = require("../models/User");

//Return all Users
router.get("/getusers", (req, res) => {
  user
    .find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//ADD A NEW USER TO THE DATABASE
router.post("/adduser", (req, res) => {
  const newUser = new user(req.body);
  newUser
    .save()
    .then(() => res.send("New user added succesfully"))
    .catch((err) => console.log(err));
});

//EDIT A USER BY ID
router.put("/edituser/:id", (req, res) => {
  user
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//REMOVE A USER BY ID
router.delete("deleteuser/:id", (req, res) => {
  user
    .findByIdAndRemove(req.params.id, req.body)
    .then(() =>
      res
        .status(200)
        .json(`User with the id :${req.params.id} has been deleted succesfully`)
    )
    .catch((err) => console.log(err));
});

module.exports = router;
