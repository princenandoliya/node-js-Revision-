import fs from "fs"
import Event from "../model/model.js"
import HttpError from "../middleware/HttpError.js"


const add = async (req, res, next) => {

    try {

        const { eventName, eventVenue, eventDate } = req.body

        const eventPoster = req.files?.eventPoster?.map((file) => file.path) || null
        const eventBanner = req.files?.eventBanner?.[0].path || null
        const eventSpeaker = req.files?.eventSpeaker?.map((file) => file.path) || null

        const newEvent = await new Event({
            eventName,
            eventVenue,
            eventDate,
            eventPoster,
            eventBanner,
            eventSpeaker
        })

        await newEvent.save()
        res.status(200).json({ success: true, message: "new event added successfully" })



    } catch (error) {
        return next(new HttpError(error.message))

    }
}


const allevent = async (req, res, next) => {
    try {

        const eventData = await Event.find({})

        if (!eventData) {
            res.status(404).json({ message: "no event found" })
        }

        res.status(200).json({ success: true, total: eventData.length, message: "Event Data", eventData })

    } catch (error) {
        return next(new HttpError(error.message, 500))

    }
}


const deleteEvent = async(req,res,next)=>{

    try {
        
        const id = req.params.id
        console.log(id)

        const deleteEvent = await Event.findByIdAndDelete(id)
        console.log(deleteEvent)

        if(!deleteEvent){
            return next(new HttpError("fail to delet event"))
        }

        const fileDelete = [
            deleteEvent.eventBanner,
            ...deleteEvent.eventPoster,
            ...deleteEvent.eventSpeaker
        ]

        fileDelete.forEach((file)=>{
            if(fs.existsSync(file)){
                fs.unlinkSync(file)
            }else{
                return next(new HttpError("fail to delete event",404))
            }
        })

        res.status(200).json({success:true,message:"event delete successfully"})


    } catch (error) {
        return next(new HttpError(error.message,500))
    }
}

export default { add, allevent,deleteEvent }