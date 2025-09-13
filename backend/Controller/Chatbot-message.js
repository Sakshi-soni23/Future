import User from "../models/User-model.js";
import Bot from "../models/bot-model.js"
export const Message =async (req,res) =>{
   try {
    const {text} = req.body;
    if(!text?.trim()){
        return res.status(400).json({message:"text cannot be empty"}) }

        const user = await User.create({
Sender:"user",
text})
const botResponse =  {
           "hello": "Hello , how can i help you",
           "what is future guide?": "Future Guide is a platform that helps students of 10th and 12th grades choose their career path by providing mentorship, guidance, and resources.",
           "i am in class 10, what career options do i have?": "After class 10, you can choose among Science (PCM, PCB), Commerce, Arts/Humanities, Diploma courses, or skill-based programs depending on your interest.",
           "i am interested in science, what should i choose?": "If you love Maths, choose PCM (Physics, Chemistry, Mathematics). If you are more into Biology, choose PCB (Physics, Chemistry, Biology). If you want both, you can take PCMB",
           "what can i do after 12th with pcm?": "With PCM, you can pursue careers in Engineering, Architecture, Defence, Data Science, Artificial Intelligence, and competitive exams like JEE, NDA, etc.",
           "what can i do after 12th with commerce?": "With Commerce, you can pursue CA, CS, B.Com, BBA, MBA, Banking, Finance, and other business-related careers.",
           "what can i do after 12th with arts?": "With Arts, you can explore careers in UPSC, Journalism, Law, Literature, Design, Psychology, Social Work, etc.",
           "does future guide provide mentorship?": "Yes, Future Guide connects students with mentors who can solve doubts, guide them about subjects, exams, and career opportunities.",
           "how can i contact a mentor?": "You can sign up on the Future Guide platform, go to the mentorship section, and book a session with available mentors.",
           "does future guide support all languages?": "Yes, Future Guide uses automatic translation so students can access guidance in multiple languages",
           "what exams should i prepare for after 12th": "It depends on your stream: JEE/NEET for Science, CA/CS for Commerce, UPSC/CLAT for Arts, and many other domain-specific exams."
       }


    const normalizetext = text.toLowerCase().trim();
    const botresponse = botResponse[normalizetext] || "Sorry , I don't Understand Can you please clear properly" 
const bot = await Bot.create({
    text : botresponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage : bot.text
})
   } catch (error) {
    console.log("error in the controller code",error)
    return res.status(500).json({error:"Internal error"})
   }
}