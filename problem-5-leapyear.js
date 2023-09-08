var year=2022;

if((year % 4==0) && (year % 400==0 || year % 100 !=0)){
    console.log("the year is leap year")
}
else{
    console.log("The year is not a leap year")
}