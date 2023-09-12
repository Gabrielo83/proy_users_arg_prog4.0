const User = require("../models/users.models");
const controllerUsers = {};

//TODO: GETALL
controllerUsers.getAllUsers = async (req, res) => {
  const users = await User.findAll();

  res.render("user", { titleUser: "Usuarios", results: users });
};

//TODO: POST: PAGINA DE INICIO
controllerUsers.formCreateUser = (req, res) => {
  res.render("createUser", { titleCreateUser: "Nuevo Usuario" });
};

//PARA CREAR AL USUARIO
controllerUsers.createUser = async (req, res) => {
  const { firstName, email, image } = req.body;

  //validacion para los datos del body
  if (!firstName || !email)
    return res.status(400).send({
      message: "Por favor ingresar los datos del nombre y apellido del usuario",
    });
  //manejamos el error con trycatch
  try {
    const user = {
      firstName: firstName,
      email: email,
      image: image,
    };
    if (!user) {
      return res
        .status(409)
        .send({ message: "Usuario ya existe en la base de datos" });
    } else {
      const newUser = await User.create(user);
      return res.redirect("/user");
      //res.send({ message: "Usuario creado con exito" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

//TODO: PUT PAGINA PARA EDITAR USUARIO
controllerUsers.formEditUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id: id } });
  console.log(user);
  res.render("editUser", {
    titleEditUser: "Editar Usuario",
    user: user,
  });
};

controllerUsers.editUser = async (req, res) => {
  const { firstName, email, id, image } = req.body;
  //validación de que no mande el dato del nombre para actualizar
  if (!firstName || !email) {
    return res.status(404).send({
      message:
        "Es necesario que el parametro firstName o email tenga información para actualizar",
    });
  }
  const updateUser = await User.update(
    {
      firstName: firstName,
      email: email,
      image: image,
    },
    { where: { id: id } }
  );
  return res.redirect("/user");
};

//TODO:DELETE

controllerUsers.deleteUser = async (req, res) => {
  const { id } = req.params;
  const deleteUser = await User.destroy({ where: { id: id } });
  setTimeout(() => {
    res.redirect("/user");
  }, 2000);
};

module.exports = { controllerUsers };
