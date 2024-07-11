const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://admin:pies3,14@cluster0.2ysbtpk.mongodb.net/Notes_DB?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = connectDB;
