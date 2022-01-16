let fir=document.getElementById('fgrid');
let sir=document.getElementById('sgrid');

let btn=document.querySelectorAll('button');

var oper=1;


for(it of btn){
    it.addEventListener('click',(e)=>{
        btntxt=e.target.innerText;
        //console.log(btntxt);

        
        

        if(btntxt=='*' || btntxt=='+' || btntxt=='-' || btntxt=='÷' || btntxt=='.' ){
            
            if(oper==0){
                console.log("jnn");
            }
            if(oper==1){
                if(btntxt=='÷'){
                    btntxt='/'
                }

                
                fir.innerText+=btntxt;
               
                console.log("oper");
                oper=0;
                console.log(oper);
            }

        }



        
        else if(btntxt=='DEL'){
           
           let n=fir.innerHTML.toString().length;

           fir.innerHTML=fir.innerText.toString().substring(0,n-1);
           oper=1;

        }
        else if(btntxt=='AC'){
            
            fir.innerText="";
            sir.innerText="";

            oper=1;



        }

        else if(btntxt=='='){


            oper=1;
            sir.innerText=fir.innerText;


            fir.innerHTML=eval(fir.innerText);
        }

        else{
            oper=1;
            fir.innerText+=btntxt;
        }

    })


}




