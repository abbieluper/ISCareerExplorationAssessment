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

   

    if (document.getElementById("questionOneTableau").checked) {
        BI += 1
    }
    else if (document.getElementById("questionOneHTML").checked) {
        Dev += 1
    }
    else if (document.getElementById("questionOneVBA").checked) {
        Dev += 1
    }
    else if (document.getElementById("questionOneERD").checked) {
        Consulting += 1
    }
    else if (document.getElementById("questionOneSec").checked) {
        Dev += 1
    }
    else if (document.getElementById("questionOneBI").checked) {
        BI += 1
    }
    else {
        Other += 1
    }
    

    if (document.getElementById("questionTwoYes").checked) {
        Dev += 1
    }
    else if (document.getElementById("questionTwoNo").checked) {
        Dev += 0
    }
    else if (document.getElementById("questionTwoNA").checked) {
        Dev += 0
    }
    else {
        Other += 1
    }
    console.log(document.getElementsByName("questionTwo").value)
    if (document.getElementById("questionThreePeople").checked) {
        Management += 1
    }
    else if (document.getElementById("questionThreeTechnology").checked) {
        Dev += 1
        BI += 1
        Security += 1
    }
    else if (document.getElementById("questionThreeBoth").checked) {
        IT += 1
        Consulting += 1
    }
    else {
        Other += 1
    }


    if (document.getElementById("questionFourC").checked){
        Dev += 1
    }
    else if (document.getElementById("questionFourEncryption").checked){
        Security += 0
    }
    else if (document.getElementById("questionFourOrganization").checked){
        Management += 0
    }
    else if (document.getElementById("questionFourStatistics").checked){
        BI += 0
    }
    else if (document.getElementById("questionFourSalesforce").checked){
        Consulting += 0
    }
    else if (document.getElementById("questionFourTicketing").checked){
        IS += 1
    }
    else {
        Other += 1
    }
    //need to fix the values here

    if (document.getElementById("questionFiveUnidentified").checked) {
        Dev += 1
    }
    else if (document.getElementById("questionFiveMonitoring").checked){
        Security += 0
    }
    else if (document.getElementById("questionFiveNew").checked){
        Management += 0
    }
    else if (document.getElementById("questionFiveModel").checked){
        BI += 0
    }
    else if (document.getElementById("questionFiveCreate").checked){
        Consulting += 0
    }
    else if (document.getElementById("questionFiveTroubleshooting").checked){
        IS += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionSixDesigner").checked){
        Dev += 1
    }
    else if (document.getElementById("questionSixPreventer").checked){
        Security += 1
    }
    else if (document.getElementById("questionSixPlanner").checked){
        Management += 1
    }
    else if (document.getElementById("questionSixLeader").checked){
        Management += 1
    }
    else if (document.getElementById("questionSixProblem").checked){
        Consulting += 1
        IT += 1
    }
    else if (document.getElementById("questionSixAnalytical").checked){
        BI += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionSevenMore").checked){
        Dev += 1
        Consulting += 1
        IT += 1
    }
    else if (document.getElementById("questionSevenLess").checked){
        Security += 1
        BI += 1
        Management += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionEightMath").checked){
        BI += 1
    }
    else if (document.getElementById("questionEightInnovate").checked){
        Dev += 1
    }
    else if (document.getElementById("questionEightSupport").checked){
        IT += 1
    }
    else if (document.getElementById("questionEightPlan").checked){
        Management += 1
    }
    else if (document.getElementById("questionEightTreat").checked){
        Security += 1
    }
    else if (document.getElementById("questionEightManage").checked){
        Management += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionNineNot").checked){
        Dev += 0
    }
    else if (document.getElementById("questionNineSlightly").checked){
        Dev += 0.25
    }
    else if (document.getElementById("questionNineInterested").checked){
        Dev += 0.75
    }
    else if (document.getElementById("questionNineExtremely").checked){
        Dev += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTenNot").checked){
        Dev += 0
    }
    else if (document.getElementById("questionTenSlightly").checked){
        Dev += 0.25
    }
    else if (document.getElementById("questionTenInterested").checked){
        Dev += 0.75
    }
    else if (document.getElementById("questionTenExtremely").checked){
        Dev += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionElevenNot").checked == "NotInterested"){
        Consulting += 0
    }
    else if (document.getElementById("questionElevenSlightly").checked == "SlightlyInterested"){
        Consulting += 0.25
    }
    else if (document.getElementById("questionElevenInterested").checked == "Interested"){
        Consulting += 0.75
    }
    else if (document.getElementById("questionElevenExtremely").checked == "ExtremelyInterested"){
        Consulting += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwelveNot").checked){
        Dev += 0
    }
    else if (document.getElementById("questionTwelveSlightly").checked){
        Dev += 0.25
    }
    else if (document.getElementById("questionTwelveInterested").checked){
        Dev += 0.75
    }
    else if (document.getElementById("questionTwelveExtremely").checked){
        Dev += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionThirteenNot").checked){
        IT += 0
    }
    else if (document.getElementById("questionThirteenSlightly").checked){
        IT += 0.25
    }
    else if (document.getElementById("questionThirteenInterested").checked){
        IT += 0.75
    }
    else if (document.getElementById("questionThirteenExtremely").checked){
        IT += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionFourteenNot").checked){
        Management += 0
    }
    else if (document.getElementById("questionFourteenSlightly").checked){
        Management += 0.25
    }
    else if (document.getElementById("questionFourteenInterested").checked){
        Management += 0.75
    }
    else if (document.getElementById("questionFourteenExtremely").checked){
        Management += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionFifteenNot").checked){
        Security += 0
    }
    else if (document.getElementById("questionFifteenSlightly").checked){
        Security += 0.25
    }
    else if (document.getElementById("questionFifteenInterested").checked){
        Security += 0.75
    }
    else if (document.getElementById("questionFifteenExtremely").checked){
        Security += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionSixteenNot").checked == "NotInterested"){
        Dev += 0
    }
    else if (document.getElementById("questionSixteenSlightly").checked == "SlightlyInterested"){
        Dev += 0.25
    }
    else if (document.getElementById("questionSixteenInterested").checked == "Interested"){
        Dev += 0.75
    }
    else if (document.getElementById("questionSixteenExtremely").checked == "ExtremelyInterested"){
        Dev += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionSeventeenNot").checked){
        Consulting += 0
    }
    else if (document.getElementById("questionSeventeenSlightly").checked){
        Consulting += 0.25
    }
    else if (document.getElementById("questionSeventeenInterested").checked){
        Consulting += 0.75
    }
    else if (document.getElementById("questionSeventeenExtremely").checked){
        Consulting += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionEightteenNot").checked == "NotInterested"){
        BI += 0
    }
    else if (document.getElementById("questionEightteenSlightly").checked == "SlightlyInterested"){
        BI += 0.25
    }
    else if (document.getElementById("questionEightteenInterested").checked == "Interested"){
        BI += 0.75
    }
    else if (document.getElementById("questionEightteenExtremely").checked == "ExtremelyInterested"){
        BI += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionNineteenNot").checked){
        IT += 0
    }
    else if (document.getElementById("questionNineteenSlightly").checked){
        IT += 0.25
    }
    else if (document.getElementById("questionNineteenInterested").checked){
        IT += 0.75
    }
    else if (document.getElementById("questionNineteenExtremely").checked){
        IT += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwentyTrue").checked){
        BI += 1
    }
    else if (document.getElementById("questionTwentyFalse").checked){
        BI += 0
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwentyOneTrue").checked){
        Management += 1
    }
    else if (document.getElementById("questionTwentyOneFalse").checked){
        Management += 0
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwentyTwoTrue").checked){
        BI += 1
    }
    else if (document.getElementById("questionTwentyTwoFalse").checked){
        BI += 0
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwentyThreeTrue").checked){
        Dev += 1
        Security += 1
    }
    else if (document.getElementById("questionTwentyThreeFalse").checked ){
        Dev += 0
        Security += 1
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwentyFourTrue").checked){
        Management += 1
    }
    else if (document.getElementById("questionTwentyFourFalse").checked){
        Management += 0
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwentyFiveTrue").checked){
        Management += 1
    }
    else if (document.getElementById("questionTwentyFiveFalse").checked){
        Management += 0
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwentySixTrue").checked){
        BI += 1
    }
    else if (document.getElementById("questionTwentySixFalse").checked){
        BI += 0
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwentySevenTrue").checked) {
        Security += 1
    }
    else if (document.getElementById("questionTwentySevenFalse").checked) {
        Security += 0
    }
    else {
        Other += 1
    }

    if (document.getElementById("questionTwentyEightTrue").checked) {
        Consulting += 1
    }
    else if (document.getElementById("questionTwentyEightFalse").checked) {
        Consulting += 0
    }
    else {
        Other += 1
    }
    console.log(Dev)
    console.log(BI)
    console.log(Security)
    console.log(Management)
    console.log(Consulting)
    console.log(IT)
    console.log(Other)

    if
        ((Dev > BI) &&
        (Dev > Security) &&
        (Dev > Management) &&
        (Dev > Consulting) &&
        (Dev > IT) &&
        (Dev > Other)) {
        recommendation = "Development"
        route = "Development"
    }

    else if
        ((BI > Security) &&
        (BI > Management) &&
        (BI > Consulting) &&
        (BI > IT) &&
        (BI > Other)) {
        recommendation = "Business Intelligence/Analytics"
        route = "BusinessIntelligence"
    }
    else if
        ((Security > Management) &&
        (Security > Consulting) &&
        (Security > IT) &&
        (Security > Other)) {
        recommendation = "Security"
        route = "Security"
    }
    else if
        ((Management > Consulting) &&
        (Management > IT) &&
        (Management > Other)) {
        recommendation = "Management"
        route = "Management"
    }
    else if
        ((Consulting > IT) &&
        (Consulting > Other)) {
        recommendation = "Consulting"
        route = "ConsultingNew"
    }
    else if
        (IT > Other) {
        recommendation = "IT"
        route = "InformationTechnology"
    }
    else {
        recommendation = "Other"
        route = "OtherNew"
    }
    finalOutput = "Your recommendation is: " + recommendation
    document.getElementById("Output").innerHTML = finalOutput + "<br>"
    document.getElementById("buttonUrl").innerHTML = `<a class="btn btn-outline-light py-3 px-4 rounded-pill" style="background-color: #1b6ec2;" href="/Home/${route}">Learn More about ${recommendation}</a>     <button type="button" onclick="generatePDF()" class="btn btn-outline-light py-3 px-4 rounded-pill" style="background-color: darksalmon;">Export to PDF</button>`


});

//finalOutput = "Your recommendation is: " + recommendation
//document.getElementById("Output").innerHTML = finalOutput;

function generatePDF() {

    // Choose the element id which you want to export.
    var element = document.getElementById('divToExport');
    element.style.width = '700px';
    element.style.height = '900px';
    var opt = {
        margin: 0.5,
        filename: 'results.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait', precision: '12' }
    };

    // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
    html2pdf().set(opt).from(element).save();
}