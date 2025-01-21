
import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODN_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
// import mongoose from "mongoose";

// const connectDB = async () =>{
//     mongoose.connection.on('connected',() => console.log("database connected"))
//     await mongoose.connect(`${process.env.MONGODN_URI}/nodepracticedb`)
// }

// export default connectDB