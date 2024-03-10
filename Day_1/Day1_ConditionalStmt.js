//Conditional statement


function launchBrowser(browserName)
{
    if(browserName=="Chrome")
        console.log("Launch chrome browser");
    else
        console.log("Launch Edge browser");
}
launchBrowser("Chrome");
launchBrowser("Edge");

function runTests(testType)
{
    switch (testType)
    {
        case "Sanity":
            console.log("TestType is:" + testType);
            break;
        case "Regression":
            console.log("TestType is:" + testType);
            break;
        default:
            console.log("TestType is:" + testType);
            break;
    }
}
runTests("Regression");
runTests("Smoke");
runTests("Sanity");