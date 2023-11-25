const banco = require("mongoose");
const options = { useUnifiedTopology: true, useNewUrlParser: true };

banco
  .connect("mongodb://localhost:27017/livraria", options)
  .then(() => {
    console.log("Conectado!");
  })
  .catch((err) => console.log(err));

module.exports = banco;
