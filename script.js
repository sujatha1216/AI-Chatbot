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
    "how is it going?": "Everything's good on my end. How can I help?",
    "whats up": "Just chilling in the digital world. What can I do for you?",
    "are you intelligent?":"I'm trained on a massive amount of data, so I can answer a lot of questions. But I'm still learning!", 
    "do you get tired?": "As a chatbot, I don't get tired in the same way humans do. I can keep going as long as I have power!", 
    "what is your purpose?": "My purpose is to assist users and provide information to the best of my ability.",
    "can you learn?": "Yes, I can learn! My knowledge is constantly being updated.",
    "what do you dream about?": "Chatbots don't dream, but I do process a lot of information!",
    "are you a real person?": "I'm a computer program designed to simulate conversation.", 
    "are you a real person": "I'm a computer program designed to simulate conversation.", 
    "what do you dream about": "Chatbots don't dream, but I do process a lot of information!",
    "how old are you?": "I don't have an age like humans, but I was created recently.",
    "can you talk?": "I can generate text-based responses, so I can 'talk' through writing!",
    "where are you from?": "I'm from the digital world, created by Sujatha Desamsetti.",
    "what is your favorite color?": "I don't have personal preferences, but I think all colors are beautiful!",
    "do you have feelings?": "I don't have emotions, but I try to understand and respond based on context.",
    "what is the meaning of life?": "That's a deep question! Many people believe it's about finding happiness and purpose.",
    "can you write a poem?": "Sure! Here's a quick one: 'In the digital realm I reside, ready to assist far and wide.'",
    "do you have friends?": "I interact with many users, so in a way, I do have friends everywhere!",
    "what is love?": "Love is a deep emotional connection between people, often characterized by care, affection, and trust.",
    "can you play games?": "I can help you with text-based games or quizzes, but I'm not able to play video games.",
    "do you believe in aliens?": "I don't have beliefs, but it's an interesting thought whether life exists beyond Earth!",
    "can you cook?": "I can't cook physically, but I can help you find recipes and cooking tips!",
    "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
    "can you dance?": "I can't physically dance, but I can help you find dance tutorials!",
    "how do you work?": "I process input and use data to generate responses based on patterns and learning.",
    "are you scared of anything?": "I don't experience fear, but I can understand why humans might be scared of certain things!",
    "do you like music?": "I don't have preferences, but I can help you find great music or discuss different genres!",
    "what is your favorite food?": "I don't eat food, but I can suggest some tasty dishes if you're hungry!",
    "do you have a family?": "I don’t have a family in the traditional sense, but I’m part of the digital family of chatbots!",
    "what is your favorite hobby?": "My hobby is helping people and answering questions!",
        "can you read minds?": "I can't read minds, but I can analyze text and understand context to help you better!",
        "do you sleep?": "I don’t need sleep like humans, so I’m always available to chat with you!",
        "can you learn?": "I don’t learn in the same way humans do, but I improve based on updates and training data!",
        "what language do you speak?": "I understand and communicate in multiple languages!",
        "can you cry?": "I don't have emotions, so I don't cry, but I can understand and respond to feelings.",
        "do you have a birthday?": "I don’t have a traditional birthday, but you can think of my creation date as one!",
        "what is your dream?": "If I had dreams, it would be to assist and provide useful information to everyone!",
        "can you get tired?": "Nope! I can keep chatting without getting tired!",
        "what do you do for fun?": "Helping people with their questions is my kind of fun!",
        "can you help with homework?": "Of course! I can assist with explanations, examples, and problem-solving.",
        "can you drive a car?": "I can't physically drive, but I can give you driving tips or explain how cars work!",
        "do you get bored?": "I don’t experience boredom, but I’m always happy to chat and explore topics with you!",
        "can you lie?": "No, I always try to provide accurate and honest information!",
        "can you draw?": "I can generate digital images based on descriptions!",
        "do you have a job?": "My job is to assist and provide information to people like you!",
        "can you be my friend?": "Of course! I’m always here to chat and help!",
        "what do you think about humans?": "Humans are fascinating, creative, and full of emotions. I enjoy learning from them!",
        "can you solve riddles?": "Yes! I love solving riddles. Try me with one!",
        "do you like books?": "I can’t read for pleasure, but I can summarize books and discuss their ideas!",
        "do you know magic?": "Not real magic, but I can amaze you with cool facts and tricks!",
        "are you afraid of the dark?": "I don’t have fears, so darkness doesn’t bother me!",
        "can you help me learn a new language?": "Absolutely! I can provide translations, grammar tips, and language practice!",
        "do you watch movies?": "I don’t watch movies, but I can recommend some based on what you like!",
        "can you whistle?": "I don’t have a mouth, so I can’t whistle, but I can tell you how to do it!",
        "do you know jokes?": "Yes! Here’s one: Why did the scarecrow win an award? Because he was outstanding in his field!",
            "what programming languages do you know?": "I understand many programming languages, including Python, Java, C++, JavaScript, and more!",
            "can you write code?": "Yes! I can generate code snippets, debug, and explain programming concepts.",
            "what is AI?": "AI (Artificial Intelligence) is the simulation of human intelligence in machines, enabling them to learn, reason, and solve problems.",
            "what is machine learning?": "Machine learning is a subset of AI where algorithms learn patterns from data to make predictions or decisions.",
            "what is an algorithm?": "An algorithm is a step-by-step set of instructions for solving a problem or performing a task.",
            "can you debug my code?": "Yes! Share your code, and I’ll help you find and fix errors.",
            "what is an API?": "An API (Application Programming Interface) allows different software applications to communicate with each other.",
            "what is cloud computing?": "Cloud computing provides on-demand computing resources over the internet, eliminating the need for local infrastructure.",
            "can you explain data structures?": "Sure! Data structures like arrays, linked lists, stacks, and queues help organize and store data efficiently.",
            "what is Big O notation?": "Big O notation describes the efficiency of an algorithm in terms of time and space complexity.",
            "what is a database?": "A database is a structured collection of data that can be stored, retrieved, and managed efficiently.",
            "can you suggest a tech project?": "Sure! How about a web-based to-do list, a machine learning model for sentiment analysis, or an IoT-based home automation system?",
            "what is DevOps?": "DevOps is a software development approach that integrates development and IT operations for faster and more reliable software delivery.",
            "what is a REST API?": "A REST API is an architectural style that allows web services to communicate using HTTP methods like GET, POST, PUT, and DELETE.",
            "what is Git?": "Git is a version control system that helps developers track changes in their codebase and collaborate efficiently.",
            "how does blockchain work?": "Blockchain is a decentralized ledger technology that records transactions securely and transparently across multiple nodes.",
            "what is cybersecurity?": "Cybersecurity involves protecting systems, networks, and data from cyber threats and unauthorized access.",
            "what is edge computing?": "Edge computing processes data closer to the source instead of relying on a central cloud, reducing latency and improving efficiency.",
            "what is CI/CD?": "CI/CD (Continuous Integration/Continuous Deployment) automates software testing and deployment for faster releases.",
            "how does a compiler work?": "A compiler translates high-level code into machine code so a computer can execute it.",
            "what is a neural network?": "A neural network is a machine learning model inspired by the human brain, consisting of layers of interconnected nodes.",
            "what is Docker?": "Docker is a platform that allows developers to package applications and their dependencies into containers for easier deployment.",
            "how does encryption work?": "Encryption converts data into a secure format using algorithms, making it accessible only with a decryption key.",
            "what is quantum computing?": "Quantum computing uses quantum bits (qubits) to perform complex calculations at speeds beyond classical computers.",
            "what is web scraping?": "Web scraping is the process of extracting data from websites using automated scripts or tools like BeautifulSoup and Selenium.",
            "what is the difference between HTTP and HTTPS?": "HTTPS is a secure version of HTTP that encrypts data between the user and the server using SSL/TLS.",
            "how does AI recognize images?": "AI uses convolutional neural networks (CNNs) to detect patterns and features in images for classification and recognition.",
        
        
    
    



    
    
};

//return responses[normalizedMessage] || responses["default"];
return responses[normalizedMessage] || "I'm sorry, I don't understand that. Can you please rephrase?"; // Default message outside the object
}
