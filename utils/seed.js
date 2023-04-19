const connection = require('../config/connection');
const User = require('../models/User');
const {getRandomArrItem, getRandomName, getRandomUserName, getRandomEmail } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
    // Delete the entries in the collection
    await User.deleteMany({});

    // Empty arrays for randomly generated users
    const users = [];

    for (let i = 0; i < 10; i++) {
        const username = getRandomUserName();
        const email = getRandomEmail("@gmail.com", 15);
        const newUser = {
            username: username,
            email: email,
            //  thoughts:
            //  friends;


        };
        users.push(newUser);
    }

    // Wait for the users to be inserted into the database
    await User.collection.insertMany(users);

    const allUser = await User.find();

    console.log(allUser);

    allUser.forEach((user) => {
        let friends = [];
        while (friends.length < 3) {
        
            const randomUser = getRandomArrItem(allUser);

            if (user._id.toString() === randomUser._id.toString()) {
                continue;
            }


        }

    })


    console.table(users);
    console.timeEnd('seeding complete 🌱');
    process.exit(0);
});
