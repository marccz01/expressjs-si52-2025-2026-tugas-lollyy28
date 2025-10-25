import mongoose from "mongoose"

const restoranSchema = new mongoose.Schema (
    {
        restoranName : {
            type : String,
            required : [true, " User name wajib di isi"],
            unique : true,
            trim : true
        },
        location : {
            type : String,
            required : [true, "Email wajib di isi"],
            unique : true,
            trim : true
        },
        favoriteDish : {
            type : String,
            required : [true, " Password wajib di isi"]
        }
    },
    {
        timestamps : true
    }
)

const modelRestoran = mongoose.model("resto", restoranSchema)

export default modelRestoran