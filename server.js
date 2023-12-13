//this brings in the express packages
const express = require("express");
const app = express();

//create a route
app.get(`/api/v1/pets`, (req, res) => {
  res.send(`Welcome to our pets`);
});

//create a dynamic API route to return the pets
app.get(`/api/v1/pets/:name`, (req, res) => {
  res.send(`Hey my name is, `);
});

//create a dynamic API route to return the pets
app.get(`/api/v1/pets/:owner`, (req, res) => {
  res.send(`My owner is, `);
});
//create a dynamic API route to return the pets
app.get(`/`, (req, res) => {
  res.send(`Welcome to our pets!`);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
//create 4 API endpoints
