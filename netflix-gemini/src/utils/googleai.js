
//TODO Remove unused code
import { GoogleGenerativeAI } from "@google/generative-ai";

import { Gemini_API_Key } from "./constants";

const genAI = new GoogleGenerativeAI(Gemini_API_Key);

const run = async () => {

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Act as a movies recommendation system and suggest some movies for the query" + "Live Cricket score" + ". Only Give me 5 movies name , comma separated like the example given ahead. Example: Gadar,Animal,Pathan,Tiger,Jawan"
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  const moviesArray = text.split(',').map(movie => movie.trim());
  return moviesArray;

}

export default run;
