// const { GoogleGenAI }= require("@google/genai");


// const resultData = async(req,res)=>{
//     try{
//       // console.log("Controller")
//       const {question} = req.body;
//       // console.log(question)
//     if (!question) {
    
//         return res.status(400).json({status:400, message:"Bad Request", error: "Question is required"});
//     }
    
//     const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

//      const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash-preview-05-20",
//     contents: question,
//     })
  
//     // res.send({"result":result.text});
//     res.status(200).json({status:200, message:"Success", data: result.text});


// }catch(err){
//   res.status(500).json({status:500, message:"Internal Server Error", error: err.message});
// }
// }


// module.exports = {resultData};




const { GoogleGenAI } = require("@google/genai");

const resultData = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        status: 400,
        message: "Bad Request",
        error: "Question is required"
      });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-05-20",
      contents: [{ role: "user", parts: [{ text: question }] }],
    });

    // Extract response text safely
    const responseText =
      result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated";

    res.status(200).json({
      status: 200,
      message: "Success",
      data: responseText,
    });
  } catch (err) {
    console.error("Gemini API Error:", err); // <--- log for debugging

    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = { resultData };
