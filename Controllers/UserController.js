import { User, Role } from "../Models/index.js";

class UserController {
  constructor() {}
  getAllUsers = async (req, res, next) => {
    try {
      const result = await User.findAll({
        attributes: ["id", "nombre", "apellido", "email"],
        include: [
          {
            model: Role,
            as: "role",
            attributes: ["roleName"],
          },
        ],
      });
      if (result.length === 0) throw new Error("No se encontraron usuarios");
      res.send({ success: true, message: "Usuarios encontrados", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await User.findOne({
        where: {
          id: id,
        },
        attributes: ["id", "userName", "userLastName"],
      });
      if (!result) throw new Error("No se encontro el  usuario");
      res.send({ success: true, message: "Usuario encontrado", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  createUser = async (req, res, next) => {
    try {
      const { nombre, apellido, password, email, role } = req.body;
      const result = await User.create({
        nombre,
        apellido,
        password,
        email,
        role,
      });
      if (!result.dataValues) throw new Error("No se pudo crear el usuario");
      res
        .status(200)
        .send({ success: true, message: "Usuario creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  updateUserById = async (req, res, next) => {
    try {
      const result = User;
    } catch (error) {}
  };
  deleteUserById = async (req, res, next) => {
    try {
      const result = User;
    } catch (error) {}
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const result = await User.findOne({
        where: { email },
      });
      if (!result) throw new Error("Credenciales incorrectas");

      const compare = await result.validatePassword(password, result.password);
      if (!compare) throw new Error("Credenciales incorrectas");
      res
        .status(200)
        .send({ success: true, message: "Usuario logueado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
}

export default UserController;
