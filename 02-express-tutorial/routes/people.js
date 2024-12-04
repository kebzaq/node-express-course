const express = require("express");
const router = express.Router();
const {
  addPerson,
  getPeople,
  getPersonById,
  updatePersonsName,
  deletePerson,
} = require("../controllers/people.js");

router.get("/", getPeople);

router.get("/:id", getPersonById);

router.post("/", addPerson);

router.put("/:id", updatePersonsName);

router.delete("/:id", deletePerson);

module.exports = router;
