import mongoose from 'mongoose';


const connectToDB = async ()=>{
    await mongoose.connect(process.env.URI)
    .then((res)=>{
        console.log("DB Connected");
        })
        .catch((err)=> console.log("error"+err));
}

export default connectToDB;