import mongoose from "mongoose";

const eventschema = new mongoose.Schema({
     
    eventName:{
        type:String,
        required:true,
        trim:true
    },
    eventVenue:{
        type:String,
        required:true
    },
    eventDate:{
        type:Date,
        required:true
    },
    eventPoster:{
        type:[String],
        required:true
    },
    eventBanner:{
        type:String,
        required:true
    },
    eventSpeaker:{
        type:[String],
        required:true
    }

},{
    timestamps:true
})

const Event = mongoose.model("event",eventschema)

export default Event