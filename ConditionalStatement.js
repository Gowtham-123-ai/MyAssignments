function launchbrowser(browser) 
{
    if(browser=="chrome")
    {
        console.log("The chrome browser is launched successfully");
    }
    else
    {
        console.log("The firebox browser is launched successfully");
    }
}

function runtest(testType){
    switch(testType)
    {
        case "smoke test":
            console.log("The smoke test is excuted successfully");
            break;
        case "sanity test":
            console.log("The sanity test is excuted successfully");
            break;
        defualt:
            console.log("The regression test is excuted successfully");

    }
}
launchbrowser("firebox");
runtest("sanity test");