const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    
  ];




  // Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random names
const getRandomUserName = () =>
  `${getRandomArrItem(names)}${Math.floor(Math.random() * 10 + 1)}`;

//Functions to generate random gmail email

function getRandomEmail(domain,length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + domain;
}

// Gets a random thoughts
const getRandomThought = () =>
  `${getRandomArrItem(thoughts)}`;




  // Export the functions for use in seed.js
module.exports = {
    getRandomName,
    getRandomUserName,
    getRandomEmail,
  };