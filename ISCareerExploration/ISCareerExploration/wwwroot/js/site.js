// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#Score_Calc").click(function () {
    if ($("#1".valueOf() = "Tableau")){
        BI += 1
    }
    else if ($("#1".valueOf() = "HTML/CSS")){
        Dev += 1
    }
    else if ($("#1".valueOf() = "VBA")){
        Dev += 1
    }
    else if ($("#1".valueOf() = "ERD")){
        Consulting += 1
    }
    else if ($("#1".valueOf() = "Security")){
        Dev += 1
    }
    else if ($("#1".valueOf() = "BI")){
        BI += 1
    }
    else {
        Other += 1
    }

    if ($("#2".valueOf() = "Yes")){
        Dev += 1
    }
    else if ($("#2".valueOf() = "No")){
        Dev += 0
    }
    else if ($("#2".valueOf() = "NA")){
        Dev += 0
    }
    else {
        Other += 1
    }
    if ($("#3".valueOf() = "People")){
        Management += 1
    }
    else if ($("#3".valueOf() = "Technology")){
        Dev += 1
        BI += 1
        Security += 1
    }
    else if ($("#3".valueOf() = "Both")){
        IT += 1
        Consulting += 1
    }
    else {
        Other += 1
    }

    if ($("#4".valueOf() = "C#, JavaScript, HTML, CSS")){
        Dev += 1
    }
    else if ($("#4".valueOf() = "Encryption, Password Cracking, Penetration Testing")){
        Security += 0
    }
    else if ($("#4".valueOf() = "Organization through Kanban")){
        Management += 0
    }
    else if ($("#4".valueOf() = "Statistics with Python")){
        Analytics += 0
    }
    else if ($("#4".valueOf() = "Salesforce")){
        Consulting += 0
    }
    else if ($("#4".valueOf() = "Ticketing Systems (Jira)")){
        IS += 1
    }
    else {
        Other += 1
    }
    //need to fix the values here
    if ($("#5".valueOf() = "Unidentified Error")){
        Dev += 1
    }
    else if ($("#5".valueOf() = "Monitoring System")){
        Security += 0
    }
    else if ($("#5".valueOf() = "New project")){
        Management += 0
    }
    else if ($("#5".valueOf() = "Model to predict")){
        Analytics += 0
    }
    else if ($("#5".valueOf() = "Create a technology")){
        Consulting += 0
    }
    else if ($("#5".valueOf() = "Troubleshooting")){
        IS += 1
    }
    else {
        Other += 1
    }

    if ($("#6".valueOf() = "Designer/Creator")){
        Dev += 1
    }
    else if ($("#6".valueOf() = "Preventer")){
        Security += 1
    }
    else if ($("#6".valueOf() = "Planner")){
        Management += 1
    }
    else if ($("#6".valueOf() = "Leader")){
        Management += 1
    }
    else if ($("#6".valueOf() = "Problem Solver")){
        Consulting += 1
        IT += 1
    }
    else if ($("#6".valueOf() = "Analytical")){
        BI += 1
    }
    else {
        Other += 1
    }

    if ($("#7".valueOf() = "More Frequent")){
        Dev += 1
        Consulting += 1
        IT += 1
    }
    else if ($("#7".valueOf() = "Less Frequent")){
        Security += 1
        BI += 1
        Management += 1
    }
    else {
        Other += 1
    }

    if ($("#8".valueOf() = "Math")){
        BI += 1
    }
    else if ($("#8".valueOf() = "Innovate")){
        Dev += 1
    }
    else if ($("#8".valueOf() = "Support")){
        IT += 1
    }
    else if ($("#8".valueOf() = "Plan")){
        Management += 1
    }
    else if ($("#8".valueOf() = "Treat")){
        Security += 1
    }
    else if ($("#8".valueOf() = "Manage")){
        Management += 1
    }
    else {
        Other += 1
    }

    if ($("#9".valueOf() = "NotInterested")){
        Dev += 0
    }
    else if ($("#9".valueOf() = "SlightlyInterested")){
        Dev += 0.25
    }
    else if ($("#9".valueOf() = "Interested")){
        Dev += 0.75
    }
    else if ($("#9".valueOf() = "ExtremelyInterested")){
        Dev += 1
    }
    else {
        Other += 1
    }

    if ($("#10".valueOf() = "NotInterested")){
        Dev += 0
    }
    else if ($("#10".valueOf() = "SlightlyInterested")){
        Dev += 0.25
    }
    else if ($("#10".valueOf() = "Interested")){
        Dev += 0.75
    }
    else if ($("#10".valueOf() = "ExtremelyInterested")){
        Dev += 1
    }
    else {
        Other += 1
    }

    if ($("#11".valueOf() = "NotInterested")){
        Consulting += 0
    }
    else if ($("#11".valueOf() = "SlightlyInterested")){
        Consulting += 0.25
    }
    else if ($("#11".valueOf() = "Interested")){
        Consulting += 0.75
    }
    else if ($("#11".valueOf() = "ExtremelyInterested")){
        Consulting += 1
    }
    else {
        Other += 1
    }

    if ($("#12".valueOf() = "NotInterested")){
        Dev += 0
    }
    else if ($("#12".valueOf() = "SlightlyInterested")){
        Dev += 0.25
    }
    else if ($("#12".valueOf() = "Interested")){
        Dev += 0.75
    }
    else if ($("#12".valueOf() = "ExtremelyInterested")){
        Dev += 1
    }
    else {
        Other += 1
    }

    if ($("#13".valueOf() = "NotInterested")){
        IT += 0
    }
    else if ($("#13".valueOf() = "SlightlyInterested")){
        IT += 0.25
    }
    else if ($("#13".valueOf() = "Interested")){
        IT += 0.75
    }
    else if ($("#13".valueOf() = "ExtremelyInterested")){
        IT += 1
    }
    else {
        Other += 1
    }

    if ($("#14".valueOf() = "NotInterested")){
        Management += 0
    }
    else if ($("#14".valueOf() = "SlightlyInterested")){
        Management += 0.25
    }
    else if ($("#14".valueOf() = "Interested")){
        Management += 0.75
    }
    else if ($("#14".valueOf() = "ExtremelyInterested")){
        Management += 1
    }
    else {
        Other += 1
    }

    if ($("#15".valueOf() = "NotInterested")){
        Security += 0
    }
    else if ($("#15".valueOf() = "SlightlyInterested")){
        Security += 0.25
    }
    else if ($("#15".valueOf() = "Interested")){
        Security += 0.75
    }
    else if ($("#15".valueOf() = "ExtremelyInterested")){
        Security += 1
    }
    else {
        Other += 1
    }

    if ($("#16".valueOf() = "NotInterested")){
        Dev += 0
    }
    else if ($("#16".valueOf() = "SlightlyInterested")){
        Dev += 0.25
    }
    else if ($("#16".valueOf() = "Interested")){
        Dev += 0.75
    }
    else if ($("#16".valueOf() = "ExtremelyInterested")){
        Dev += 1
    }
    else {
        Other += 1
    }

    if ($("#17".valueOf() = "NotInterested")){
        Consulting += 0
    }
    else if ($("#17".valueOf() = "SlightlyInterested")){
        Consulting += 0.25
    }
    else if ($("#17".valueOf() = "Interested")){
        Consulting += 0.75
    }
    else if ($("#17".valueOf() = "ExtremelyInterested")){
        Consulting += 1
    }
    else {
        Other += 1
    }

    if ($("#18".valueOf() = "NotInterested")){
        BI += 0
    }
    else if ($("#18".valueOf() = "SlightlyInterested")){
        BI += 0.25
    }
    else if ($("#18".valueOf() = "Interested")){
        BI += 0.75
    }
    else if ($("#18".valueOf() = "ExtremelyInterested")){
        BI += 1
    }
    else {
        Other += 1
    }

    if ($("#19".valueOf() = "NotInterested")){
        IT += 0
    }
    else if ($("#19".valueOf() = "SlightlyInterested")){
        IT += 0.25
    }
    else if ($("#19".valueOf() = "Interested")){
        IT += 0.75
    }
    else if ($("#19".valueOf() = "ExtremelyInterested")){
        IT += 1
    }
    else {
        Other += 1
    }

    if ($("#20".valueOf() = "True")){
        BI += 1
    }
    else if ($("#20".valueOf() = "False")){
        BI += 0
    }
    else {
        Other += 1
    }

    if ($("#21".valueOf() = "True")){
        Management += 1
    }
    else if ($("#21".valueOf() = "False")){
        Management += 0
    }
    else {
        Other += 1
    }

    if ($("#22".valueOf() = "True")){
        BI += 1
    }
    else if ($("#22".valueOf() = "False")){
        BI += 0
    }
    else {
        Other += 1
    }

    if ($("#23".valueOf() = "True")){
        Dev += 1
        Security += 1
    }
    else if ($("#23".valueOf() = "False")){
        Dev += 0
        Security += 1
    }
    else {
        Other += 1
    }

    if ($("#24".valueOf() = "True")){
        Management += 1
    }
    else if ($("#24".valueOf() = "False")){
        Management += 0
    }
    else {
        Other += 1
    }

    if ($("#25".valueOf() = "True")){
        Management += 1
    }
    else if ($("#25".valueOf() = "False")){
        Management += 0
    }
    else {
        Other += 1
    }

    if ($("#26".valueOf() = "True")){
        BI += 1
    }
    else if ($("#26".valueOf() = "False")){
        BI += 0
    }
    else {
        Other += 1
    }

    if ($("#27".valueOf() = "True")) {
        Security += 1
    }
    else if ($("#27".valueOf() = "False")) {
        Security += 0
    }
    else {
        Other += 1
    }

    if ($("#28".valueOf() = "True")) {
        Consulting += 1
    }
    else if ($("#28".valueOf() = "False")) {
        Consulting += 0
    }
    else {
        Other += 1
    }

    if
    ((Dev > BI) &&
    (Dev > Security) &&
    (Dev > Management) &&
    (Dev > Consulting) &&
    (Dev > IT) &&
    (Dev > Other))
    {
        recommendation = "Development"
    }

    else if
    ((BI > Security) &&
    (BI > Management) &&
    (BI > Consulting) &&
    (BI > IT) &&
    (BI > Other))
    {
        recommendation = "Business Intelligence/Analytics"
    }
    else if
    ((Security > Management) &&
    (Security > Consulting) &&
    (Security > IT) &&
    (Security > Other))
    {
        recommendation = "Security"
    }
    else if
    ((Management > Consulting) &&
    (Management > IT) &&
    (Management > Other))
    {
        recommendation = "Management"
    }
    else if
    ((Consulting > IT) &&
    (Consulting > Other))
    {
        recommendation = "Consulting"
    }
    else if
    (IT > Other)
    {
        recommendation = "IT"
    }
    else
    {
        recommendation = "Other"
    }

    document.getElementById("Output").innerHTML = "Your recommendation is: " + recommendation
})