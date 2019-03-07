const express = require('express');
const router = express.Router();
const idGenerator = require('../modules/id.generator')();
const basket = [{fruit: 'Grapefruit', id: idGenerator.next().value}, 
                {fruit: 'Watermelon', id: idGenerator.next().value}];

// Add a new fruit to the basket
router.post('/', (req, res) => {
    const itemToAdd = req.body;
    // give the fruit an id so we can delete it later
    itemToAdd.id = idGenerator.next().value;
    basket.push(itemToAdd);
    res.sendStatus(201);
});

// Return back an array of all the fruit
router.get('/', (req, res) => {
    res.send(basket);
});

// Remove an item from the array with a matching id
router.delete('/:id', (req, res) => {
    let index = 0;
    // loop over all the items in the basket
    for (const item of basket) {
        // check to see if the id matches
        if (req.params.id == item.id) {
            // found the item, remove it from the array
            basket.splice(index, 1);
            break;
        }
        index += 1;
    }
    res.sendStatus(200);
});

module.exports = router;