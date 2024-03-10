function calGrade(score)
{
    switch (score/10) {
        case 10:
        case 9:
            console.log("Grade A");
            break;
        case 8:
            console.log("Grade B");
            break;
        case 7:
            console.log("Grade C");
            break;
        default:
            console.log("Grade D");
            break;
    }
}
calGrade(100);
calGrade(92);
calGrade(33);
calGrade(67);
calGrade(79);