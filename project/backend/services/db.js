const knex = require("knex");

const db = knex({
  client: "mysql2",
  connection: {
    host: "",
    user: "",
    password: "",
    database: ""
  }
});

//export