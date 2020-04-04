const {
    Sequelize,
    DataTypes
} = require('sequelize');

const UserModel = require('./database/models/user');

console.log('..:: Creating Instance of Sequelize ::..');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/db.sqlite3'
});

console.log('..:: Creating Models ::..');
const User = UserModel(sequelize, DataTypes);

(async () => {
    try {
        console.log('Establishing connection with the database...');
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        console.log('Creating new user (insert)...');
        const jane = await User.create({
            firstName: "Jane",
            lastName: "Doe"
        });
        console.log('Jane\'s auto-generated ID:', jane.id);

        console.log('Find all users...');
        let users = await User.findAll();
        console.log("All users:", JSON.stringify(users, null, 2));

        console.log('Specifying attributes all users...');
        users = await User.findAll({
            attributes: [
                ['id', 'code'], 'firstName', 'email'
            ]
        });
        console.log("All users:", JSON.stringify(users, null, 2));

        console.log('Applying WHERE clauses...');
        users = await User.findAll({
            where: {
                email: null
            }
        });
        console.log("All users:", JSON.stringify(users, null, 2));

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();