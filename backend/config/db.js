const mongoose = require("mongoose");

// const connecton = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log(`db connect successfully`);
//     } catch (error) {
//         console.log(`db not connect `);
//     }
// }

// module.exports = connecton

const db = process.env.MONGO_URL;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`Db connected sucessfully`))
  .catch((err) => console.log("errrr", err));
