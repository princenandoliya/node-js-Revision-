import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: (value) => {
            if (value.toLowerCase() === "password") {
                return "password can't contain password word as password"
            }
        }
    }
})



userSchema.pre("save", async function () {
    const user = this
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10)
    }
})

userSchema.statics.findbycredentials = async function (email, password) {

    try {
        const user = await this.findOne({ email })
        if (!user) {
            throw new Error("unable to login")
        }

        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            throw new Error("unable to login")
        }

            return user

    } catch (error) {
        throw new Error(Error.message)

    }


}


userSchema.methods.genrateAuthToken = async function () {
    try {

        const user = this

        console.log("jwtSecret", process.env.JWT_SECRET)


        const token = jwt.sign(
            { _id: user._id.toString() },
            process.env.JWT_SECRET,
            { expiresIn: "6d" }
        )
        console.log("token", token)

        if (!user) {
            throw new Error("fail to genret token")
        }

        user.tokens = user.tokens.concat({ token })

        await user.save()

        return token

    } catch (error) {
        throw new error(error.message)
    }

}



const user = mongoose.model("user", userSchema)

export default user