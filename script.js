document.getElementById('send-button').addEventListener('click', function() {
    const userInput=document.getElementById('user-input');
    const userMessage=userInput.value;
    if(userMessage.trim() !=="") {
        displayMessage(userMessage,'user');
        userInput.value='';
        setTimeout(() => {
            const botResponse=getBotResponse(userMessage);
            displayMessage(botResponse,'bot');
        },1000);}});
        


function displayMessage(message,sender)
{
    const chatBox=document.getElementById('chat-box');
    const messageDiv=document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender==='bot'?'bot-message':'user-message');
    messageDiv.textContent=message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop=chatBox.scrollHeight;
}


function getBotResponse(userMessage)
{
    const normalizedMessage=userMessage.toLowerCase();

    if(normalizedMessage.includes("current time")){
        const currentTime=new Date().toLocaleTimeString();
        return `The current time is ${currentTime}.`;
    }
    

    if(normalizedMessage.includes("current date")){
        const currentDate=new Date().toLocaleDateString();
        return `The current time is ${currentDate}.`;
    }
    


const mathPattern=/(\d+)\s*([\+\-\*\/])\s*(\d+)/;
const mathMatch=normalizedMessage.match(mathPattern);
if(mathMatch)
{
   const num1=parseFloat(mathMatch[1]);
   const operator=mathMatch[2];
   const num2=parseFloat(mathMatch[3]);
   let result;
   switch(operator){
    case'+':
         result=num1 + num2;
         break;
    case'-':
         result=num1 - num2;
         break;
     case'*':
         result=num1 * num2;
         break;
    case'/':
         result=num2!== 0 ? num1 / num2:"undefined(divison by zero)";
         break;
    default:
        result="Invalid operation";
   }
return `The result of ${num1} ${operator} ${num2} is ${result}.`;
}

const reminderPattern=/remind me to(.*?) at (\d{1,2}(:\d{2})?\s?(am|pm))/i;
const match=normalizedMessage.match(reminderPattern);

if(match)
{
    const task=match[1];
    const time=match[2];
    if(!Window.reminders)window.reminders=[];
    reminders.push({task,time});
return `Okay, I will remind you to ${task} at ${time}.`;

}

const responses={
    "hi":"Hello! How can I help you?",
    "how are you?":"I'm just Robot,but thanks for asking!",
    "bye":"Goodbye! Have a great day!",
    "hello":"Hi there! What can I do for you?",
    "who is your creator":"My creator is Suji.",
    "what is your name?":"I'm a simple chatbot named Alia created by Sujatha Desamsetti to assist you.",
    "what can you do?":"I can chat with you,provide the current time,date,solve simple math problems,and answer basic questions!",
    "help":"Sure! What do you need help with?",
    "thank you":"You're welcome! If you have more questions,feel free to ask.",
    "who is your crime partner":"My crime partner is suji.",
    
};

//return responses[normalizedMessage] || responses["default"];
return responses[normalizedMessage] || "I'm sorry, I don't understand that. Can you please rephrase?"; // Default message outside the object
}