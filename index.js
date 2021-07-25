var g;

function grade(g){

    switch(true){
        case g<35:
            console.log("FAILED");
            break;

        case g>=35 && g<60:
            console.log("SECOND CLASS");
            break;

        case g>=60 && g<80:
            console.log("FIRST CLASS");
            break;

        case g>85:
            console.log("DISTINCTION");
            break;

            default:
                console.log("invalid");
    }
}
grade(87);