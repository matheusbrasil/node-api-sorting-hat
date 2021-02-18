const express = require('express')

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
        var hogwartsHouses = [
            new Houses(
                'Gryffindor',
                'You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve and chivalry Set Gryffindors apart.',
                [
                    'Harry Potter',
                    'Hermione Granger',
                    'Ron Weasley'
                ],
                'https://static.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg'
                ),
            new Houses(
                'Hufflepuff',
                'You might belong in Hufflepuff Where they are just and loyal Those patient Hufflepuffs are true And unafraid of toil.',
                [
                    'Newt Scamander',
                    'Cedric Diggory',
                    'Nymphadora Tonks'
                ],
                'https://static.wikia.nocookie.net/harrypotter/images/d/da/Hufflepuff_House_Crest_old.jpg'
            ),
            new Houses(
                'Ravenclaw',
                'Or yet in wise old Ravenclaw If you’ve a ready mind Where those of wit and learning Will always find their kind.',
                [
                    'Luna Lovegood',
                    'Gilderoy Lockhart',
                    'Filius Flitwick'
                ],
                'https://static.wikia.nocookie.net/harrypotter/images/7/77/Ravenclaw_House_Crest.jpg'
            ),
            new Houses(
                'Slytherin',
                'Or perhaps in Slytherin You’ll make your real friends Those cunning folk use any means To achieve their ends.',
                [
                    'Severus Snape',
                    'Draco Malfoy',
                    '(rather unfortunately) Lord Voldemort'
                ],
                'https://static.wikia.nocookie.net/harrypotter/images/7/71/Slytherin_crest_old.jpg'
            )
        ];

        return res.status(200).json({ sortingHat: hogwartsHouses[getRandomInt(0,3)] })
    }
}