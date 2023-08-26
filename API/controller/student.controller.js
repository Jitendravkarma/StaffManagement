import url from 'url';
import '../models/connection.js';
import StudentSchemaModel from '../models/student.model.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import sendEmail from './email.controller.js';

export const save=async (req,res,next)=>{
 var studentList=await StudentSchemaModel.find().sort({"_id":-1});
 var _id=studentList.length==0?1:studentList[0]._id+1;
 var studentDetails={...req.body,"_id":_id,"status":0,"role":"student","info":Date()};    
 var student = await StudentSchemaModel.create(studentDetails);
 if(student)
 {
   sendEmail(req.body.email,req.body.password);
   return res.status(201).json({"status":true});
 }
 else
   return res.status(201).json({"status": false});
}

export const fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var studentList = await StudentSchemaModel.find(condition_object);
  var l=studentList.length;
  if(l!=0)
    return res.status(201).json(studentList);
  else
    return res.status(500).json({"result": "Server Error"});
}

export const deleteUser=async(req,res,next)=>{
  var condition_obj=req.body;          
  var student = await StudentSchemaModel.find(condition_obj);
  if(user.length!=0){
    let result = await StudentSchemaModel.deleteMany(condition_obj); 
    if(result)
     return res.status(201).json({"msg":"record deleted successfully...."});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"}); 
}


export const updateUser=async(req,res,next)=>{
  let studentDetails = await StudentSchemaModel.findOne(req.body.condition_obj);
  if(studentDetails){
     let user=await StudentSchemaModel.updateOne(req.body.condition_obj,{$set: req.body.set_condition});   
     if(student)
      return res.status(201).json({"msg":"record updated successfully"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}


export const login=async (req,res,next)=>{
  var studentDetails=req.body;
  studentDetails={...studentDetails,"status":1};
  var studentList = await StudentSchemaModel.find(studentDetails);
  var l=studentList.length;
  if(l!=0)
  {
    let payload={"subject":studentList[0].email};
    let key=rs.generate();
    let token=jwt.sign(payload,key);
    return res.status(201).json({"token":token,"studentDetails":studentList[0]});
  }
  else
    return res.status(500).json({"token": "error"});
}