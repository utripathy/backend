import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await ongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("err", () => {
//       console.log("Error :: ", error);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listen on Port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.error("Error ::", error);
//     throw err;
//   }
// })();
