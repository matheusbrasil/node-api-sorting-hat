const express = require('express');
const path = require('path');
const hogwartsHouses = require('../public/mockdata/houses.json');

class Houses{
    constructor(houseName, houseDescription, notableMembers,imageLink) {
        this.houseName = houseName;
        this.houseDescription = houseDescription;
        this.notableMembers = notableMembers;
        this.imageLink = imageLink;
    }
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    sortingHat: (req, res) => {
        // Returns a random House
        var hogwartsHouse = Object.assign({}, hogwartsHouses[getRandomInt(0,3)]);
        hogwartsHouse.imageLink = new URL(req.protocol + "://" + req.get("host") + hogwartsHouse.imageLink);

        return res.status(200).json({ sortingHat: hogwartsHouse })
    }
}