import fs from "fs"
import HttpError from "../middleware/HttpError.js";
import Event from "../model/model.js";

const addEvent = async (req, res, next) => {
    try {

        const { eventName, eventDate, eventVenue, description, ticketPrice } = req.body


        const eventBanner = req.files?.eventBanner?.[0]?.path || null
        const eventPoster = req.files?.eventPoster?.map((file) => file.path) || null



        const newEvent = new Event({

            eventName,
            eventDate,
            eventVenue,
            description,
            ticketPrice,
            eventBanner,
            eventPoster,



        })
        await newEvent.save()

        res.status(200).json({ success: true, message: "Event added success", newEvent })




    } catch (error) {
        next(new HttpError(error.message, 500))
    }
}

const allEvent = async (req, res, next) => {

    try {

        const EventData = await Event.find({})

        if (!EventData) {
            return next(new HttpError("no EventData found", 404))
        }

        res.status(200).json({ success: true, total: EventData.length, message: "Event Data", EventData })

    } catch (error) {
        next(new HttpError(error.message, 500))

    }

}

const getEvent = async (req, res, next) => {

    try {

        const id = req.params.id

        const EventData = await Event.findById(id)

        if (!EventData) {
            return next(new HttpError("no EventData found with this id", 404))

        }

        res.status(200).json({ sueccess: true, message: "Event data found successfully", EventData })

    } catch (error) {
        next(new HttpError(error.message, 500))
    }
}


const deleteEvent = async (req, res, next) => {
    try {

        const id = req.params.id;

        const deleteEvent = await Event.findById(id);

        if (!deleteEvent) {
            return next(
                new HttpError(
                    "event not found",
                    404
                )
            );
        }

        // delete banner
        if (
            deleteEvent.eventBanner &&
            fs.existsSync(
                deleteEvent.eventBanner
            )
        ) {
            fs.unlinkSync(
                deleteEvent.eventBanner
            );
        }

        // delete posters
        if (
            deleteEvent.eventPoster?.length
        ) {
            deleteEvent.eventPoster.forEach(
                (file) => {
                    if (
                        fs.existsSync(file)
                    ) {
                        fs.unlinkSync(file);
                    }
                }
            );
        }

        // delete from db
        await Event.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message:
                "Event deleted successfully"
        });

    } catch (error) {
        next(
            new HttpError(
                error.message,
                500
            )
        );
    }
};




const updateEvent = async (req,res,next)=> {
    try {

        const id = req.params.id;

        const EventData =  await Event.findById(id);

        if (!EventData) {
            return next(
                new HttpError(
                    "event not found with this id",
                    404
                )
            );
        }

        const updates =  Object.keys(req.body);

        const allowedFields = [
            "eventName",
            "eventDate",
            "eventVenue",
            "description",
            "ticketPrice"
        ];

        const isValidUpdate =  updates.every((field) => allowedFields.includes(field));

        if (!isValidUpdate) {
            return next(
                new HttpError(
                    "only allowed fields can be updated",
                    400
                )
            );
        }

        // BODY UPDATE
        updates.forEach((field)=>{
                EventData[field] = req.body[field];
            }
        );

        // update banner
        if (
            req.files?.eventBanner
        ) {

            if (
                EventData.eventBanner &&
                fs.existsSync(
                    EventData.eventBanner
                )
            ) {
                fs.unlinkSync(
                    EventData.eventBanner
                );
            }

            EventData.eventBanner =
                req.files
                    .eventBanner[0]
                    .path;
        }

        // update poster
        if (
            req.files?.eventPoster
        ) {

            EventData.eventPoster.forEach(
                (file) => {
                    if (
                        fs.existsSync(
                            file
                        )
                    ) {
                        fs.unlinkSync(
                            file
                        );
                    }
                }
            );

            EventData.eventPoster =
                req.files.eventPoster.map(
                    (file) =>
                        file.path
                );
        }

        await EventData.save();

        res.status(200).json({
            success: true,
            message:
                "event data updated successfully",
            EventData
        });

    } catch (error) {
        next(
            new HttpError(
                error.message,
                500
            )
        );
    }
};

export default { addEvent, allEvent, getEvent, deleteEvent, updateEvent }