import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("err", () => {
      console.log("Error :: ", error);
      throw err;
    });

    app.listen(PORT, () => {
      console.log("Server is running on port :: ", PORT);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection Failed", err);
  });

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
