//wired up form using formData object and added eventListener
const form = document.querySelector("form");

form.addEventListener("submit", submit);
function submit (event) { 
    event.preventDefault();
    let formData = new FormData(form);
    console.log(form);
    console.log(formData.get("yourEmail"));
    console.log(formData.get("messageSubject"));
    console.log(formData.get("message"));
}

let badWord = "/crap|ugly|brat|fool|fuck|fucking|f*cking|f*ck|bitch|b*tch|shit|sh*t|fool|dumb|couch potato|arse|arsehole|asshole|*ssh*l*|****|c*ck|****sucker|c*cks*ck*r|****|c*nt|dickhead|d*c*h*a*|****|f*c*|****wit|f*ckw*t|fuk|f*k|fuking|f*k*ng|mother****er|m*th*rf*ck*r|******|n*gg*r|pussy|p*ssy|****|sh*t|wanker|w*nk*r|wankers|w*nk*rs|whore|wh*r*|slag| sl*g|*****|b*tch|f u c k|f*c*|b.i.t.c.h|b*tch|d-i-c-k|d***/gi";
let replacedWord = message.replace(badWord,"***");
alert(replaceWord);

//All if statements require a condition enclosed in parenthesis. 
//You also cannot do a returns true check, I don't believe the returns keyword exists, 
//actually, only return which is used for functions/methods

if (message)
{ 
   if message.badWord returns true;
    ("*****")
}else{ false

}


