let h1 = document.querySelector("h1");


let counter = setInterval(function(){
        h1.textContent -= 1;
        if(h1.textContent === "0"){
                clearInterval(counter);
        }
},1000);

