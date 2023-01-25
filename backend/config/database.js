const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Mongodb connected with server : ${data.connection.host}`);
    })
    // we have handled unhandled promise rejection errors
    // .catch((err)=>{
    //     console.log(err);
    // })
}
mongoose.set('strictQuery', false);

module.exports = connectDatabase;