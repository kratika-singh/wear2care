import { hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
export const registerController = async(req,res)=>{
    try {
        const {name,email,password,phone,address} = req.body
        //validation
        if(!name){
            return res.send({error:"Name is required"});
        }
        if(!email){
            return res.send({error:"Email is required"});
        }
        if(!password){
            return res.send({error:"Password is required"});
        }
        if(!phone){
            return res.send({error:"Phone is required"});
        }
        if(!address){
            return res.send({error:"Address is required"});
        }

        // existing user check
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already Registered. Please Login'
            })
        }
        // register user
        const hashedPassword =await hashPassword(password);
        const user  = await new userModel({name,email,phone,address,password:hashedPassword}).save();
        res.status(201).send({
            success:true,
            message:'User registered Successfully',
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Registeration',
            error
        })
    }
};

