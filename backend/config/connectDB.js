const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
    }catch(error){
        console.log(error)
    }
}

module.exports = connectDB;


// const startServer = async()=>{
//   try{
//        await connectDB();
//        app.listen(PORT,()=>{
//         console.log(`Server running on port ${PORT}`)
//     })
//   }catch(error){
//    console.log(error) 
//   }
// }

// startServer();