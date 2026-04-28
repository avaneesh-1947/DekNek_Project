import mongoose from 'mongoose';
import { url } from './config.js';

 const connect = async()=>{
    try{
        await mongoose.connect(url);
        console.log("db se connection safal hua");
    }catch(error){
        console.log("db se connection me error aa rahah hai",error.message);
    }
 }

export default connect;