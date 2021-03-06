import mongoose from "mongoose";


const initDB = ()=>{
    // if we connected already than no need to connect again 
    if(mongoose.connections[0].readyState){
        console.log('already connected');
        return
    }
    mongoose.connect(`${process.env.MONGO_URI}`);
    mongoose.connection.on('connected', ()=>{
        console.log('connected');
    })
    mongoose.connection.on('error', (err)=>{
        console.log(err);
    })
};

export default initDB;