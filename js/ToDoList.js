window.onload=function(){
    let arr2=localStorage.arr2?localStorage.arr2.split(","):[]
    let arr1=localStorage.arr1?localStorage.arr1.split(","):[]
    console.log(arr1,arr2)
    let bigbox1=document.querySelector(".bigbox");
    let bigbox2=document.querySelector(".bigbox2");
    let shuru=document.querySelector(".title input");
    let num=document.querySelector("#num1");
    let num2=document.querySelector("#num2");
    now()
    function now(){
       
        bigbox1.innerText="";
        bigbox2.innerText="";
        localStorage.arr1=arr1.join(",")
        localStorage.arr2=arr2.join(",")
        num.innerText=arr1.length;
        arr1.forEach (function(item,index) {
        let div=document.createElement("div");
        bigbox1.appendChild(div);
        div.className="son";
        let input=document.createElement("input");
        div.appendChild(input);
        input.setAttribute("type","checkbox");
       
        let span=document.createElement("span");
        span.innerText=item;
        div.appendChild(span);
        span.ondblclick=function(){
            let input=document.createElement("input")
            input.style.width="500px";
            input.style.height="32px"
            input.style.margin=0;
            input.style.border=0;
            input.style.color="red";
            let con=this.innerText;
            this.innerText="";
            input.value=con;
            input.onkeydown=function(e){
                if(e.keyCode==13 && this.value!=""){
                    arr1[index]=input.value;
                    now();
                }
            }
            input.onblur=function(){
                arr1[index]=input.value;
                now();
            }
            
            span.appendChild(input);
            input.focus();
        }
        input.onclick=function(){
            arr1.splice(index,1)
            console.log(arr1)
            arr2.unshift(item);
            now()
        }
        let div2=document.createElement("div");
        div.appendChild(div2);
        div2.className=("right");
        let div3=document.createElement("div");
        div2.appendChild(div3);
        div3.className=("box");
        div3.innerText="-";
        div2.onclick=function(){
            arr1.splice(index,1)
            now()
        }
    })
    
    num2.innerText=arr2.length;
    arr2.forEach (function(item,index) {
        let div=document.createElement("div");
        bigbox2.appendChild(div);
        div.className="son";
        let input=document.createElement("input");
        div.appendChild(input);
        input.setAttribute("type","checkbox");
        
        input.onclick=function(){
            arr2.splice(index,1)
            arr1.unshift(item);
            now()
        }
        let span=document.createElement("span");
        div.appendChild(span);
        span.innerText=item;
        span.ondblclick=function(){
            let input=document.createElement("input")
            input.style.width="500px";
            input.style.height="32px"
            input.style.margin=0;
            input.style.border=0;
            input.style.color="red";
            let con=this.innerText;
            this.innerText="";
            input.value=con;
            input.onkeydown=function(e){
                if(e.keyCode==13 && this.value!=""){
                    arr2[index]=input.value;
                    now();
                }
            }
            input.onblur=function(){
                arr2[index]=input.value;
                now();
            }
            
            span.appendChild(input);
            input.focus();
        }
        let div2=document.createElement("div");
        div.appendChild(div2);
        div2.className=("right");
        let div3=document.createElement("div");
        div2.appendChild(div3);
        div3.className=("box");
        div3.innerText="-";
        div2.onclick=function(){
            arr2.splice(index,1)
            now()
        }
    })
   }
   
   shuru.onkeydown=function (e){
    
        if(e.keyCode==13 && this.value!=""){
            arr1.push(shuru.value);
            now();
            shuru.value="";
        }
   }
   
}