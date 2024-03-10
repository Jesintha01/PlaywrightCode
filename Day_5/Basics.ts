// type stringOrNumber = string|number;
// let varName:type = value
// let value:stringOrNumber = "TypeScript";
// value = 123;


// const compName = "Testleaf";
// compName = "Qeagle"
// type supportedBrowsers = "Chrome"|"Firefox"|"Webkit"|121;
// function invokeBrowser(browserName:supportedBrowsers):void {
// if(browserName==="Chrome"){
// console.log("Execute Login Test");
// }
// else{
// console.log("Execute Add To Cart Test");
//     }
// }
// invokeBrowser("Chrome");


//Intersection --> &
// type Employee = {id:number, empName:string};
// type Department= {department: string};
// type Team = Employee & Department;
// let team: Team = {id: 1003,empName: "Vidya", department: "QA"};
// console.log(team);

/* Custom Type for browserNames
* Custom Type for browserVersions
* 
* Use both custom Types and print the values
*/


// type browserName = {browser:string};
// type browserVersions={version:number}
// type browserDetails= browserName & browserVersions;
// let BrowserDetails: browserDetails= {browser:"Chrome" , version: 8.3 };
// console.log(BrowserDetails);


type browserNames = "Chrome"|"Firefox"|"Webkit";
type browserVersions=123|121|111;

type browserDetails=browserNames & browserVersions;

function invokeBrowser(browser:browserDetails):void {
if(browser==="Chrome")
{
    console.log("Execute Login Test");
}
else
{
    console.log("Execute Add To Cart Test");
}
}
invokeBrowser(browserDetails);
