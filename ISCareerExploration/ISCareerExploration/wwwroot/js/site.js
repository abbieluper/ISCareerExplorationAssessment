// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#Score_Calc").click(function () {
    var BI = 0;
    var Dev = 0;
    var Other = 0;
    var Consulting = 0;
    var Management = 0;
    var Security = 0;
    var IT = 0;
    var recommendation = "None";

   

    if (document.getElementById("questionOne").value == "Tableau") {
        BI += 1
    }
    else if (document.getElementById("questionOneHTML").value == "HTML/CSS") {
        Dev += 1
    }
    else if (document.getElementById("questionOneVBA").value == "VBA") {
        Dev += 1
    }
    else if (document.getElementById("questionOneERD").value == "ERD") {
        Consulting += 1
    }
    else if (document.getElementById("questionOneSec").value == "Security") {
        Dev += 1
    }
    else if (document.getElementById("questionOneBI").value == "BI") {
        BI += 1
    }
    else {
        Other += 1
    }
    console.log(document.getElementById("questionOneVBA").value)
    console.log(document.getElementsByName("questionOne").value)
    console.log(Management)
    console.log(Other)
    console.log(Dev)
    console.log(BI)
    

    if (document.getElementById("questionTwo").value == "Yes") {
        Dev += 1
    }
    else if (document.getElementById("questionTwo").value == "No") {
        Dev += 0
    }
    else if (document.getElementById("questionTwo").value == "NA") {
        Dev += 0
    }
    else {
        Other += 1
    }
    console.log(document.getElementsByName("questionTwo").value)
    if (document.getElementById("questionThree").value == "People") {
        Management += 1
    }
    else if (document.getElementById("questionThree").value == "Technology") {
        Dev += 1
        BI += 1
        Security += 1
    }
    else if (document.getElementById("questionThree").value == "Both") {
        IT += 1
        Consulting += 1
    }
    else {
        Other += 1
    }
    console.log(document.getElementById("questionThree").value)
    console.log(Management)
    console.log(Other)
    console.log(Dev)
    console.log(BI)

    //if (document.getElementById("questionFour").value == "C#, JavaScript, HTML, CSS"){
    //    Dev += 1
    //}
    //else if (document.getElementById("questionFour").value == "Encryption, Password Cracking, Penetration Testing"){
    //    Security += 0
    //}
    //else if (document.getElementById("questionFour").value == "Organization through Kanban"){
    //    Management += 0
    //}
    //else if (document.getElementById("questionFour").value == "Statistics with Python"){
    //    Analytics += 0
    //}
    //else if (document.getElementById("questionFour").value == "Salesforce"){
    //    Consulting += 0
    //}
    //else if (document.getElementById("questionFour").value == "Ticketing Systems (Jira)"){
    //    IS += 1
    //}
    //else {
    //    Other += 1
    //}
    ////need to fix the values here

    //if (document.getElementById("questionFive").value == "Unidentified Error") {
    //    Dev += 1
    //}
    //else if (document.getElementById("questionFive").value == "Monitoring System"){
    //    Security += 0
    //}
    //else if (document.getElementById("questionFive").value == "New project"){
    //    Management += 0
    //}
    //else if (document.getElementById("questionFive").value == "Model to predict"){
    //    Analytics += 0
    //}
    //else if (document.getElementById("questionFive").value == "Create a technology"){
    //    Consulting += 0
    //}
    //else if (document.getElementById("questionFive").value == "Troubleshooting"){
    //    IS += 1
    //}
    //else {
    //    Other += 1
    //}

    //if (document.getElementById("questionSix").value == "Designer/Creator"){
    //    Dev += 1
    //}
    //else if (document.getElementById("questionSix").value == "Preventer"){
    //    Security += 1
    //}
    //else if (document.getElementById("questionSix").value == "Planner"){
    //    Management += 1
    //}
    //else if (document.getElementById("questionSix").value == "Leader"){
    //    Management += 1
    //}
    //else if (document.getElementById("questionSix").value == "Problem Solver"){
    //    Consulting += 1
    //    IT += 1
    //}
    //else if (document.getElementById("questionSix").value == "Analytical"){
    //    BI += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#7").val() == "More Frequent"){
    //    Dev += 1
    //    Consulting += 1
    //    IT += 1
    //}
    //else if ($("#7").val() == "Less Frequent"){
    //    Security += 1
    //    BI += 1
    //    Management += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#8").val() == "Math"){
    //    BI += 1
    //}
    //else if ($("#8").val() == "Innovate"){
    //    Dev += 1
    //}
    //else if ($("#8").val() == "Support"){
    //    IT += 1
    //}
    //else if ($("#8").val() == "Plan"){
    //    Management += 1
    //}
    //else if ($("#8").val() == "Treat"){
    //    Security += 1
    //}
    //else if ($("#8").val() == "Manage"){
    //    Management += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#9").val() == "NotInterested"){
    //    Dev += 0
    //}
    //else if ($("#9").val() == "SlightlyInterested"){
    //    Dev += 0.25
    //}
    //else if ($("#9").val() == "Interested"){
    //    Dev += 0.75
    //}
    //else if ($("#9").val() == "ExtremelyInterested"){
    //    Dev += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#10").val() == "NotInterested"){
    //    Dev += 0
    //}
    //else if ($("#10").val() == "SlightlyInterested"){
    //    Dev += 0.25
    //}
    //else if ($("#10").val() == "Interested"){
    //    Dev += 0.75
    //}
    //else if ($("#10").val() == "ExtremelyInterested"){
    //    Dev += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#11").val() == "NotInterested"){
    //    Consulting += 0
    //}
    //else if ($("#11").val() == "SlightlyInterested"){
    //    Consulting += 0.25
    //}
    //else if ($("#11").val() == "Interested"){
    //    Consulting += 0.75
    //}
    //else if ($("#11").val() == "ExtremelyInterested"){
    //    Consulting += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#12").val() == "NotInterested"){
    //    Dev += 0
    //}
    //else if ($("#12").val() == "SlightlyInterested"){
    //    Dev += 0.25
    //}
    //else if ($("#12").val() == "Interested"){
    //    Dev += 0.75
    //}
    //else if ($("#12").val() == "ExtremelyInterested"){
    //    Dev += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#13").val() == "NotInterested"){
    //    IT += 0
    //}
    //else if ($("#13").val() == "SlightlyInterested"){
    //    IT += 0.25
    //}
    //else if ($("#13").val() == "Interested"){
    //    IT += 0.75
    //}
    //else if ($("#13").val() == "ExtremelyInterested"){
    //    IT += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#14").val() == "NotInterested"){
    //    Management += 0
    //}
    //else if ($("#14").val() == "SlightlyInterested"){
    //    Management += 0.25
    //}
    //else if ($("#14").val() == "Interested"){
    //    Management += 0.75
    //}
    //else if ($("#14").val() == "ExtremelyInterested"){
    //    Management += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#15").val() == "NotInterested"){
    //    Security += 0
    //}
    //else if ($("#15").val() == "SlightlyInterested"){
    //    Security += 0.25
    //}
    //else if ($("#15").val() == "Interested"){
    //    Security += 0.75
    //}
    //else if ($("#15").val() == "ExtremelyInterested"){
    //    Security += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#16").val() == "NotInterested"){
    //    Dev += 0
    //}
    //else if ($("#16").val() == "SlightlyInterested"){
    //    Dev += 0.25
    //}
    //else if ($("#16").val() == "Interested"){
    //    Dev += 0.75
    //}
    //else if ($("#16").val() == "ExtremelyInterested"){
    //    Dev += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#17").val() == "NotInterested"){
    //    Consulting += 0
    //}
    //else if ($("#17").val() == "SlightlyInterested"){
    //    Consulting += 0.25
    //}
    //else if ($("#17").val() == "Interested"){
    //    Consulting += 0.75
    //}
    //else if ($("#17").val() == "ExtremelyInterested"){
    //    Consulting += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#18").val() == "NotInterested"){
    //    BI += 0
    //}
    //else if ($("#18").val() == "SlightlyInterested"){
    //    BI += 0.25
    //}
    //else if ($("#18").val() == "Interested"){
    //    BI += 0.75
    //}
    //else if ($("#18").val() == "ExtremelyInterested"){
    //    BI += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#19").val() == "NotInterested"){
    //    IT += 0
    //}
    //else if ($("#19").val() == "SlightlyInterested"){
    //    IT += 0.25
    //}
    //else if ($("#19").val() == "Interested"){
    //    IT += 0.75
    //}
    //else if ($("#19").val() == "ExtremelyInterested"){
    //    IT += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#20").val() == "True"){
    //    BI += 1
    //}
    //else if ($("#20").val() == "False"){
    //    BI += 0
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#21").val() == "True"){
    //    Management += 1
    //}
    //else if ($("#21").val() == "False"){
    //    Management += 0
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#22").val() == "True"){
    //    BI += 1
    //}
    //else if ($("#22").val() == "False"){
    //    BI += 0
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#23").val() == "True"){
    //    Dev += 1
    //    Security += 1
    //}
    //else if ($("#23").val() == "False"){
    //    Dev += 0
    //    Security += 1
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#24").val() == "True"){
    //    Management += 1
    //}
    //else if ($("#24").val() == "False"){
    //    Management += 0
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#25").val() == "True"){
    //    Management += 1
    //}
    //else if ($("#25").val() == "False"){
    //    Management += 0
    //}
    //else {
    //    Other += 1
    //}

    //if ($("#26").val() == "True"){
    //    BI += 1
    //}
    //else if ($("#26").val() == "False"){
    //    BI += 0
    //}
    //else {
    //    Other += 1
    //}

    if (document.getElementById(questionTwentySevenTrue).checked() == "True") {
        Security += 1
    }
    else if ($("#27").val() == "False") {
        Security += 0
    }
    else {
        Other += 1
    }

    //if ($("#28").val() == "True") {
    //    Consulting += 1
    //}
    //else if ($("#28").val() == "False") {
    //    Consulting += 0
    //}
    //else {
    //    Other += 1
    //}

    if
        ((Dev > BI) &&
        (Dev > Security) &&
        (Dev > Management) &&
        (Dev > Consulting) &&
        (Dev > IT) &&
        (Dev > Other)) {
        recommendation = "Development"
    }

    else if
        ((BI > Security) &&
        (BI > Management) &&
        (BI > Consulting) &&
        (BI > IT) &&
        (BI > Other)) {
        recommendation = "Business Intelligence/Analytics"
    }
    else if
        ((Security > Management) &&
        (Security > Consulting) &&
        (Security > IT) &&
        (Security > Other)) {
        recommendation = "Security"
    }
    else if
        ((Management > Consulting) &&
        (Management > IT) &&
        (Management > Other)) {
        recommendation = "Management"
    }
    else if
        ((Consulting > IT) &&
        (Consulting > Other)) {
        recommendation = "Consulting"
    }
    else if
        (IT > Other) {
        recommendation = "IT"
    }
    else {
        recommendation = "Other"
    }
    finalOutput = "Your recommendation is: " + recommendation
    document.getElementById("Output").innerHTML = finalOutput;
});

//finalOutput = "Your recommendation is: " + recommendation
//document.getElementById("Output").innerHTML = finalOutput;