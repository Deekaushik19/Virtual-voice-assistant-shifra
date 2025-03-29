

let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-US";
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day=new Date();
    let hours=day.getHours();
    if(hours>=0 && hours<12){
        speak("Good morning sir");
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon sir");
    }else{
        speak("Good evening sir");
    }
}
window.addEventListener('load',()=>{
    wishMe();
});

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
recognition.onresult=(event)=>{
    let currentIndex= event.resultIndex
    let transcript= event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
   recognition.start()
   btn.style.display="none"
   voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")||message.includes("listen")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you?")){
        speak("i m virtual assistant shifra, created by deeksha kaushik")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube....")
        window.open("https://www.youtube.com/","_blank")
    }else if(message.includes("open google")){
        speak("opening google....")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook....")
        window.open("https://www.facebook.com/","_blank")
    }    
    else if(message.includes("open instagram")){
        speak("opening instagram....")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("tell me a joke")){
        speak("opening jokes...")
        window.open("https://parade.com/1287449/marynliles/short-jokes/#200-short-jokes-that-are-funny")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp....")
        window.open("whatsapp://")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator....")
        window.open("calculator://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour :"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day :"numeric",month:"short",year:"numeric"})
        speak(date)
    }
    else if(message.includes("thank you")){
        speak("its my pleasure sir,have a nice day")
    }
    else if(message.includes(" do you know me")){
        speak("yes you are my user")
    }
    else if(message.includes("how are you")){
        speak("i am good you say how can i help you?")
    }
    else if(message.includes("what are you doing?")){
        speak("i am doing well")
    }
    else if(message.includes("what is your name")){
        speak("i am shifra the virtual assistant")
    }

    else{
        let finalText="this is what i found on google regarding" + message.replace("shipra","")||message.replace("shifra","")
        speak(finalText)
       window.open(`https://www.google.co.in/search?q=${message}`)
     }
}