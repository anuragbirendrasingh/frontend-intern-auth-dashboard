const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 3 ,
        maxLength : 10 ,
        trim : true ,
        index : true
    },
    lastName : {
        type : String,
        maxLength: 15 ,
        trim : true,
        default : ""
    } ,
    age : {
        type : Number,
        required : true ,
        min : 15 ,
        max : 120 ,

    } ,
    gender :{
        type : String ,
        required : true ,
        lowercase : true ,
        enum : {
            values : ["male","female","others"],
            message : "{VALUE} is not of  gender type"
        }
    },
      photoUrl:{
        type : String,
        default : function () {
            if (this.gender === "female") {
                return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoBKt1NdpPkOFhIEMpWMgx2OTCJ2mb73lVA&s";
            }
            if (this.gender === "male") {
                return "https://cdn-icons-png.flaticon.com/512/921/921347.png";
            }
            return "https://cdn-icons-png.flaticon.com/512/64/64572.png"; 
        },
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("The URL is not valid");
            }
        }
    },

    emailId :{
        type : String,
        required :true ,
        unique : true,
        trim : true ,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid ");
            }
        }
    },
    password :{
        type : String,
        required : true ,
        select : false,
    },
    about :{
        type : String,
    }


    
},{timestamps : true})

module.exports = mongoose.model("Users" , userSchema)