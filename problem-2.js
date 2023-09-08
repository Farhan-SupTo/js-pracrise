var mark=97;

if(mark>100){
    console.log("mark should not be more than 100")
}else if(mark>=0 && mark<=100){
    if(mark>=0 && mark<33){
        console.log("Fail")
    }else if(mark>=33 && mark<40){
        console.log("You got D");
    }else if(mark>=40 && mark<50){
        console.log("You got C");
    }else if(mark>=50 && mark<60){
        console.log("You got B");
    }
    else if(mark>=60 && mark<70){
        console.log("You got A-");
    }
    else if(mark>=70 && mark<80){
        console.log("You got A");
    }
    else if(mark>=80 && mark<100){
        console.log("You got A+");
    }
}

    
else{
    console.log("You are a feltu");
}