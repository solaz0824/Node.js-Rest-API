const Router = require("express").Router;

const { personController } = require("../controllers");
const personRouter = Router();

personRouter.post("/", personController.createPerson);

personRouter.get("/", personController.getPersons);
personRouter.get("/:id", personController.getPersonById);

personRouter.patch("/:id", personController.updatePerson);
personRouter.delete("/:id", personController.deletePerson);

module.exports = {
  personRouter,
};
