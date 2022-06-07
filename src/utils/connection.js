/* eslint-disable no-undef */
var mysql = require("mysql");
class connectionDB {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "demo",
      port: 3306,
    });
  }

  //   Comprobar la Conexion
  connect() {
    this.connection.connect(function (error) {
      if (error) {
        throw error;
      } else {
        console.log("Conexion correcta.");
      }
    });
  }

  //   Realizar consulta por cuenta y password
  consultaUsuario(pwd, account) {
    this.connection.query(
      "SELECT * FROM usuario WHERE cuenta = '" +
        account +
        "' AND contrasenia = '" +
        pwd + "';",
      function (error, result) {
        if (error) {
          throw error;
        } else {
          var resultado = result;
          if (resultado.length > 0) {
            return resultado
          } else {
            console.log("Registro no encontrado");
          }
        }
      }
    );
    this.connection.end();
  }
}

// var db = new connectionDB();
// db.consultaUsuario('lmefreg34', '003534')

export { connectionDB };
