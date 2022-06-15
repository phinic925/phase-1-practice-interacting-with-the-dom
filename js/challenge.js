const incrementCount =document.getElementById("plus")
    const decrementCount =document.getElementById("minus")
    const counter = document.getElementById('counter')
    const heart = document.getElementById("heart")
    const pause= document.getElementById("pause")
   const  submit = document.getElementById("comment-form")
   let count=0;
    function myFunc ()
    c= setInterval(()=>{
    
    
    counter.innerHTML++;
},1000)
    //function to increment the counter
    const handleIncrement = ()=> {
        count++;
        counter.innerHTML=count;
    }
    //function to decrement te counter
    const handleDecrement = () => {
        count--;
        counter.innerHTML=count;
    }
    const pauseTime = () => {
        if(pause.innerHTML!= 'play'){
            clearInterval(c)
            pause.innerHTML='pause'
        }
    }
    let num= 0;
    function likes(){
        let like = document.querySelector(".likes")
        let likeul = document.createElement("ul")
        let likeli = document.createElement("li")
        let currentCount = counter.innerHTML;
        if (num>=0){
            num++;
            likeli.innerHTML=`${currentCount} has been liked ${num} time`;
            like.append(likeul);
            likeul.append(likeli);
        }
        }
        function submitsButton(e){
            let comment = document.querySelector(".comments");
            let commentInput = document.querySelector('#comment-input').value;
            let p = document.createElement("p");
            e.preventDefault();
            p.innerHTML= commentInput;
            comment.append(p);


        }
    
    
    document.addEventListener("DOMContentLoaded",myFunc)
    
    incrementCount.addEventListener("click",handleIncrement)
    decrementCount.addEventListener("click",handleDecrement)
    pause.addEventListener('click', pauseTime);
     heart.addEventListener('click',likes);
    submit.addEventListener('submit',submitsButton);

    

