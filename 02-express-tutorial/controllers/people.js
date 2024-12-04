let { people } = require("../data");

const getPeople = (req, res) => {
  console.log("People api");
  res.json(people);
};

const getPersonById = (req, res) => {
  const person = people.find((p) => p.id === Number(req.params.id));
  if (!person) {
    res
      .status(404)
      .json({ success: false, message: "Person with requested ID not found" });
    return;
  }
  return res.json(person);
};
const updatePersonsName = (req, res) => {
  const personInd = people.findIndex((p) => p.id === Number(req.params.id));

  if (personInd === -1) {
    return res.status(404).json({
      success: false,
      message: "Person with requested ID not found",
    });
  }
  people[personInd].name = req.body.name;
  return res.json({ success: true, name: people[personInd].name });
};

const addPerson = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
    return;
  }
  people.push({ id: people.length + 1, name: req.body.name });
  return res.status(201).json({ success: true, name: req.body.name });
};

const deletePerson = (req, res) => {
  const personId = Number(req.params.id);
  const personExists = people.some((p) => p.id === personId);
  if (!personExists) {
    return res.status(404).json({
      success: false,
      message: `Person with id ${personId} not found`,
    });
  }
  people = people.filter((p) => p.id !== personId);
  return res.json({
    success: true,
    message: `Person with id ${personId} successfully deleted`,
  });
};

module.exports = {
  getPeople,
  addPerson,
  getPersonById,
  updatePersonsName,
  deletePerson,
};
