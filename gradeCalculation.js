function studentscore(mark)
{
    switch(true)
    {
        case(mark>=90 && mark<=100):
           consloe.log("Grade A");
           break;
        case(mark>=80 && mark<90):
           console.log("Grade B");
            break;
        case(mark>=70 && mark<=80):
            console.log("Grade C");
            break;
        case(mark>=60 && mark<=70):
            console.log("Grade D");
            break;
        defult:
            console.log("Fail");
            break;
    }
}
studentscore(82);