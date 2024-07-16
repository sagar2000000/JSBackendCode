import mongoose ,{Schema} from "mongoose";

const subscriptionSchema=new Schema({
  subscriber:{
    type:Schema.Types.ObjectId, //one who is subscribing 

    ref:"User"

  },
  channel:{
    type:Schema.Types.ObjectId, //one whose channel is subscribed 

    ref:"User"

  }
},{timestamps:true})





export const Subcriptions=mongoose.model("Subscriptions",subscriptionSchema)