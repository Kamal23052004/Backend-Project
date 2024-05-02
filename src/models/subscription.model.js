import mongoose, {Schema} from "mongoose"



const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    Channel: {
        type: Schema.Types.ObjectId, // one to whom 'subscriber' is subscribing
        ref: "User"
    }
}, {timeseries: true})










export const Subscription = mongoose.model("Subscription", subscriptionSchema)