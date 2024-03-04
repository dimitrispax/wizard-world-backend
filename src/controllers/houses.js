const houseRouter = require('express').Router()
const middleware = require('../utils/middleware')


//////////////////////
////////READ/////////
////////////////////

/* Get all house and if the url contains 'name' parameter filter results by the value of the name. */
houseRouter.get('/', async (request, response) => {

  const query = request.query.name; // Accessing the value of the parameter.
  const houses = require("../data/houses.json"); // Accessing the data of the JSON.

  if (query !== undefined) { // If a query with 'name' parameter is made, filter the data.
    if (query.length > 0) { 
      const filteredHouses = houses.filter((house => house.name.toLowerCase().includes(query)));
      if (filteredHouses.length === 0){
        response.status(404).send({error: `House that contains "${query}" in name was not found.`}).end()
      } else
        response.json(filteredHouses)
    } else 
      response.status(400).send({error: `Bad Request. Please fill a value in the parameter.`}).end()
  } else  // return all the houses.
    response.json(houses)
})

module.exports = houseRouter