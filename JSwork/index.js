
function SelectLang(clbk){
    if(clbk=="c"){
        return function Ccompiler(){
            return "C compiler";
            
        }

    }
    else{
        return function Javacompiler(){
            return "Java compiler";
        
        }

    }
   
    
    console.log("Hii,you have selected"+clbk);


}
console.log(SelectLang("c"));



