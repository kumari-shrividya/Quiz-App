//import { response } from 'express';
import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

/**get all questions */
export async function getQuestions(req, res) {
  // res.json('questions api get request');
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questions */
export async function insertQuestions(req, res) {
  const docs = await Questions.insertMany([{ questions, answers }]);
  res.json(docs);
  //res.json('questions api post request')
}

/** Delete questions */
export async function deleteQuestions(req, res) {
  //  res.json('questions api  delete request')
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions deleted" });
  } catch (error) {
    res.json({ error });
  }
}

/** get all result */
export async function getResult(req, res) {
  //res.json("result  api  get result");

  try{
	const r = await Results.find()
	 res.json(r)
  }catch (error){
	res.json(error)
  }
}

/** post result */
export async function postResult(req, res) {
  //res.json("result  api  post result");
  try{
	const {username,result,attempts,points,achieved} = req.body
	if(!username && !result) throw new Error('Data Not provided...');
	const doc = Results.create({username,result,attempts,points,achieved})
	res.json(doc)
  }catch (error){
	res.json(error)
  }
}

/** delete result  */
export async function deleteResult(req, res) {
 // res.json("result  api  delete result");
 try{
	await Results.deleteMany()
	res.json({msg:'Results deleted..'})
 }catch(error){
	res.json({ error })
 }
}
