const { DataTypes, Model } = require("sequelize");
const { db } = require("../db");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class User extends Model {}
User.init(
  {
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notEmpty: true,
      },
    },
    first: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    last: {
      type: DataTypes.STRING,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      defaultValue: "guest",
      get() {
        if (this.last) {
          return `${this.first} ${this.last}`;
        } else {
          return `${this.first}`;
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "guest_pw",
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
  },
  { sequelize: db, modelName: "users" }
);
//define any class or instance methods
User.authenticate = async function ({ email, password }) {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET);
    return token;
  }
  const error = Error("bad credentials");
  error.status = 401;
  throw error;
};

User.byToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findByPk(id);
    if (user) return user;
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  } catch (ex) {
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  }
};

User.addHook("beforeCreate", async (user) => {
  user.password = await bcrypt.hash(user.password, 5);
});

//export your model

module.exports = User;
