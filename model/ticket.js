const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Ticket = new Schema({
    support_by:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    ticket_by:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    create_at:{
        type: Date,
        default: Date.now
    },
    close_at:{
        type: Date,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    archive :{
        type: Boolean,
        default: false
    },
    redirect_to :{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    waiting:{
        type: Boolean,
        default: true
    },
    subject:{
        type: String,
        trim: true
    },
    rating: {
        type: String,
        trim: true,
        default: "0.0"
    },
    is_rating:{
        to:{
            type: Number,
            default: 0
        },
        status:{
            type: Boolean,
            default: false
        }
    },
    content: [
        {
            send_at: {
                type: Date,
                default: Date.now
            },
            by:{
                type: Number,
                required: true
            },
            context:{
                type: String,
                trim: true
            },
            attachment: {
                type: String,
                trim: true
            }
        }
    ]
  });

module.exports = mongoose.model("tickets", Ticket);