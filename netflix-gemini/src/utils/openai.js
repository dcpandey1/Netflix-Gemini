//TODO unused code to removed
import OpenAI from 'openai';
import { GPI_API_Key } from "./constants";

const openai = new OpenAI({
  apiKey: GPI_API_Key,
  dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;