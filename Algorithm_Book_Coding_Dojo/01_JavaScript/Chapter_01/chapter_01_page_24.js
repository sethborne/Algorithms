function giveMeSpace(){
    console.log("                                                         ");
}

function moreAccurateGrades(numValGrades){
    if(numValGrades >= 92 && numValGrades <= 100){
        console.log("Grade is: A");
    }
    else if(numValGrades >= 90 && numValGrades < 92){
        console.log("Grade is: A-");
    }
    //
    else if(numValGrades >= 88 && numValGrades < 90){
        console.log("Grade is: B+");
    }
    else if(numValGrades >= 82 && numValGrades < 88){
        console.log("Grade is: B");
    }
    else if(numValGrades >= 80 && numValGrades < 82){
        console.log("Grade is: B-");
    }
    //
    else if(numValGrades >= 78 && numValGrades < 80){
        console.log("Grade is: C+");
    }
    else if(numValGrades >= 72 && numValGrades < 78){
        console.log("Grade is: C");
    }
    else if(numValGrades >= 70 && numValGrades < 72){
        console.log("Grade is: C-");
    }
    //
    else if(numValGrades >= 68 && numValGrades < 70){
        console.log("Grade is: D+");
    }
    else if(numValGrades >= 62 && numValGrades < 68){
        console.log("Grade is: D");
    }
    else if(numValGrades >= 60 && numValGrades < 62){
        console.log("Grade is: D-");
    }
    //
    else if(numValGrades >= 0 && numValGrades < 60){
        console.log("Grade is: F");
    }
    
    else{
        console.log("Grade Value is Out of Range.  Please Resubmit Valid Value");
    }
}

giveMeSpace();
moreAccurateGrades(100);
moreAccurateGrades(92);
moreAccurateGrades(91);
moreAccurateGrades(90);
giveMeSpace();
// +
moreAccurateGrades(89);
// 
moreAccurateGrades(87);
moreAccurateGrades(82);
// -
moreAccurateGrades(80);
giveMeSpace();
// +
moreAccurateGrades(79);
// 
moreAccurateGrades(77);
moreAccurateGrades(72);
// -
moreAccurateGrades(70);
giveMeSpace();
// +
moreAccurateGrades(69);
// 
moreAccurateGrades(67);
moreAccurateGrades(62);
// -
moreAccurateGrades(60);
giveMeSpace();
// f
moreAccurateGrades(59)
moreAccurateGrades(0)

moreAccurateGrades(150);
moreAccurateGrades(-50)