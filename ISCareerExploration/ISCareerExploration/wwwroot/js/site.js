// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#Score_Calc").submit(function Score_Calc() {
    BI = 0
    Dev = 0
    Other = 0
    Consulting = 0
    Management = 0
    Security = 0
    IT = 0
    recommendation = "None"

    if ($("#1".value() = "Tableau")) {
        BI += 1
    }
    else if ($("#1".value() = "HTML/CSS")){
        Dev += 1
    }
    else if ($("#1".value() = "VBA")){
        Dev += 1
    }
    else if ($("#1".value() = "ERD")){
        Consulting += 1
    }
    else if ($("#1".value() = "Security")){
        Dev += 1
    }
    else if ($("#1".value() = "BI")){
        BI += 1
    }
    else {
        Other += 1
    }

    if ($("#2".value() = "Yes")){
        Dev += 1
    }
    else if ($("#2".value() = "No")){
        Dev += 0
    }
    else if ($("#2".value() = "NA")){
        Dev += 0
    }
    else {
        Other += 1
    }
    if ($("#3".value() = "People")){
        Management += 1
    }
    else if ($("#3".value() = "Technology")){
        Dev += 1
        BI += 1
        Security += 1
    }
    else if ($("#3".value() = "Both")){
        IT += 1
        Consulting += 1
    }
    else {
        Other += 1
    }

    if ($("#4".value() = "C#, JavaScript, HTML, CSS")){
        Dev += 1
    }
    else if ($("#4".value() = "Encryption, Password Cracking, Penetration Testing")){
        Security += 0
    }
    else if ($("#4".value() = "Organization through Kanban")){
        Management += 0
    }
    else if ($("#4".value() = "Statistics with Python")){
        Analytics += 0
    }
    else if ($("#4".value() = "Salesforce")){
        Consulting += 0
    }
    else if ($("#4".value() = "Ticketing Systems (Jira)")){
        IS += 1
    }
    else {
        Other += 1
    }
    //need to fix the values here

    if ($("#5".value() = "Unidentified Error")) {
        Dev += 1
    }
    else if ($("#5".value() = "Monitoring System")){
        Security += 0
    }
    else if ($("#5".value() = "New project")){
        Management += 0
    }
    else if ($("#5".value() = "Model to predict")){
        Analytics += 0
    }
    else if ($("#5".value() = "Create a technology")){
        Consulting += 0
    }
    else if ($("#5".value() = "Troubleshooting")){
        IS += 1
    }
    else {
        Other += 1
    }

    if ($("#6".value() = "Designer/Creator")){
        Dev += 1
    }
    else if ($("#6".value() = "Preventer")){
        Security += 1
    }
    else if ($("#6".value() = "Planner")){
        Management += 1
    }
    else if ($("#6".value() = "Leader")){
        Management += 1
    }
    else if ($("#6".value() = "Problem Solver")){
        Consulting += 1
        IT += 1
    }
    else if ($("#6".value() = "Analytical")){
        BI += 1
    }
    else {
        Other += 1
    }

    if ($("#7".value() = "More Frequent")){
        Dev += 1
        Consulting += 1
        IT += 1
    }
    else if ($("#7".value() = "Less Frequent")){
        Security += 1
        BI += 1
        Management += 1
    }
    else {
        Other += 1
    }

    if ($("#8".value() = "Math")){
        BI += 1
    }
    else if ($("#8".value() = "Innovate")){
        Dev += 1
    }
    else if ($("#8".value() = "Support")){
        IT += 1
    }
    else if ($("#8".value() = "Plan")){
        Management += 1
    }
    else if ($("#8".value() = "Treat")){
        Security += 1
    }
    else if ($("#8".value() = "Manage")){
        Management += 1
    }
    else {
        Other += 1
    }

    if ($("#9".value() = "NotInterested")){
        Dev += 0
    }
    else if ($("#9".value() = "SlightlyInterested")){
        Dev += 0.25
    }
    else if ($("#9".value() = "Interested")){
        Dev += 0.75
    }
    else if ($("#9".value() = "ExtremelyInterested")){
        Dev += 1
    }
    else {
        Other += 1
    }

    if ($("#10".value() = "NotInterested")){
        Dev += 0
    }
    else if ($("#10".value() = "SlightlyInterested")){
        Dev += 0.25
    }
    else if ($("#10".value() = "Interested")){
        Dev += 0.75
    }
    else if ($("#10".value() = "ExtremelyInterested")){
        Dev += 1
    }
    else {
        Other += 1
    }

    if ($("#11".value() = "NotInterested")){
        Consulting += 0
    }
    else if ($("#11".value() = "SlightlyInterested")){
        Consulting += 0.25
    }
    else if ($("#11".value() = "Interested")){
        Consulting += 0.75
    }
    else if ($("#11".value() = "ExtremelyInterested")){
        Consulting += 1
    }
    else {
        Other += 1
    }

    if ($("#12".value() = "NotInterested")){
        Dev += 0
    }
    else if ($("#12".value() = "SlightlyInterested")){
        Dev += 0.25
    }
    else if ($("#12".value() = "Interested")){
        Dev += 0.75
    }
    else if ($("#12".value() = "ExtremelyInterested")){
        Dev += 1
    }
    else {
        Other += 1
    }

    if ($("#13".value() = "NotInterested")){
        IT += 0
    }
    else if ($("#13".value() = "SlightlyInterested")){
        IT += 0.25
    }
    else if ($("#13".value() = "Interested")){
        IT += 0.75
    }
    else if ($("#13".value() = "ExtremelyInterested")){
        IT += 1
    }
    else {
        Other += 1
    }

    if ($("#14".value() = "NotInterested")){
        Management += 0
    }
    else if ($("#14".value() = "SlightlyInterested")){
        Management += 0.25
    }
    else if ($("#14".value() = "Interested")){
        Management += 0.75
    }
    else if ($("#14".value() = "ExtremelyInterested")){
        Management += 1
    }
    else {
        Other += 1
    }

    if ($("#15".value() = "NotInterested")){
        Security += 0
    }
    else if ($("#15".value() = "SlightlyInterested")){
        Security += 0.25
    }
    else if ($("#15".value() = "Interested")){
        Security += 0.75
    }
    else if ($("#15".value() = "ExtremelyInterested")){
        Security += 1
    }
    else {
        Other += 1
    }

    if ($("#16".value() = "NotInterested")){
        Dev += 0
    }
    else if ($("#16".value() = "SlightlyInterested")){
        Dev += 0.25
    }
    else if ($("#16".value() = "Interested")){
        Dev += 0.75
    }
    else if ($("#16".value() = "ExtremelyInterested")){
        Dev += 1
    }
    else {
        Other += 1
    }

    if ($("#17".value() = "NotInterested")){
        Consulting += 0
    }
    else if ($("#17".value() = "SlightlyInterested")){
        Consulting += 0.25
    }
    else if ($("#17".value() = "Interested")){
        Consulting += 0.75
    }
    else if ($("#17".value() = "ExtremelyInterested")){
        Consulting += 1
    }
    else {
        Other += 1
    }

    if ($("#18".value() = "NotInterested")){
        BI += 0
    }
    else if ($("#18".value() = "SlightlyInterested")){
        BI += 0.25
    }
    else if ($("#18".value() = "Interested")){
        BI += 0.75
    }
    else if ($("#18".value() = "ExtremelyInterested")){
        BI += 1
    }
    else {
        Other += 1
    }

    if ($("#19".value() = "NotInterested")){
        IT += 0
    }
    else if ($("#19".value() = "SlightlyInterested")){
        IT += 0.25
    }
    else if ($("#19".value() = "Interested")){
        IT += 0.75
    }
    else if ($("#19".value() = "ExtremelyInterested")){
        IT += 1
    }
    else {
        Other += 1
    }

    if ($("#20".value() = "True")){
        BI += 1
    }
    else if ($("#20".value() = "False")){
        BI += 0
    }
    else {
        Other += 1
    }

    if ($("#21".value() = "True")){
        Management += 1
    }
    else if ($("#21".value() = "False")){
        Management += 0
    }
    else {
        Other += 1
    }

    if ($("#22".value() = "True")){
        BI += 1
    }
    else if ($("#22".value() = "False")){
        BI += 0
    }
    else {
        Other += 1
    }

    if ($("#23".value() = "True")){
        Dev += 1
        Security += 1
    }
    else if ($("#23".value() = "False")){
        Dev += 0
        Security += 1
    }
    else {
        Other += 1
    }

    if ($("#24".value() = "True")){
        Management += 1
    }
    else if ($("#24".value() = "False")){
        Management += 0
    }
    else {
        Other += 1
    }

    if ($("#25".value() = "True")){
        Management += 1
    }
    else if ($("#25".value() = "False")){
        Management += 0
    }
    else {
        Other += 1
    }

    if ($("#26".value() = "True")){
        BI += 1
    }
    else if ($("#26".value() = "False")){
        BI += 0
    }
    else {
        Other += 1
    }

    if ($("#27".value() = "True")) {
        Security += 1
    }
    else if ($("#27".value() = "False")) {
        Security += 0
    }
    else {
        Other += 1
    }

    if ($("#28".value() = "True")) {
        Consulting += 1
    }
    else if ($("#28".value() = "False")) {
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
}
)