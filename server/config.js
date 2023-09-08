module.exports = {
    HOST: "YOUR_HOST_HERE",
    USER: "YOUR_USER_HERE",
    PASSWORD: "YOUR_PASSWORD_HERE",
    DB: "YOUR_DATABASE_HERE",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};