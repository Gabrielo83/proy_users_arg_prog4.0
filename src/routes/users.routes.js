const userRoutes = require("express").Router();
const { controllerUsers } = require("../controllers/user.controller");
const User = require("../models/users.models");

//ruta GET INDEX
//userRoutes.get("/user", controllerUsers.indexUsers);

//ruta GET ALL USERS
userRoutes.get("/user", controllerUsers.getAllUsers);

//ruta GET USER BY ID
// userRoutes.get("/user/:id", controllerUsers.getUserById);

//ruta POST (crear usuario)
userRoutes.get("/createUser", controllerUsers.formCreateUser);
userRoutes.post("/saveUser", controllerUsers.createUser);

//ruta (actualizar al usuario)
userRoutes.get("/editUser/:id", controllerUsers.formEditUser);
userRoutes.post("/updateUser", controllerUsers.editUser);

//ruta DELETE (eliminar)
userRoutes.get("/deleteUser/:id", controllerUsers.deleteUser);

module.exports = userRoutes;
