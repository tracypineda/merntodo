const express = require("express");
const router = express.Router();

//item model

const Item = require ("../../models/Item");


// @ route GET api/items
// @description Get all Items
// @access public

router.get("/", (req,res)=> {
    Item.find()
    .then(items => res.json(items))
    .sort({date: -1})
});

// @ route POST api/items
// @description Create a post
// @access public

router.post("post/", (req,res)=> {
   const newItem = new Item({
       name: req.body.name
   });
        newItem.save()
        .then(item => res.json(item));
});


module.exports = router;

