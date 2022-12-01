// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#Score_Calc").click(function () {
    if ($("#IS201".valueOf() = "Tableau"){
        BI += 1
    }
    else if ($("#IS201".valueOf() = "HTML/CSS"){
        Dev += 1
    }
    else if ($("#IS201".valueOf() = "VBA"){
        Dev += 1
    }
    else if ($("#IS201".valueOf() = "ERD"){
        Consulting += 1
    }
    else if ($("#IS201".valueOf() = "Security"){
        Dev += 1
    }
    else if ($("#IS201".valueOf() = "BI"){
        BI += 1
    }
    else {
        Dev += 0
    }
    if ($("#IS303".valueOf() = "Yes"){
        Dev += 1
    }
    else if ($("#IS303".valueOf() = "No"){
        Dev += 0
    }
    else if ($("#IS303".valueOf() = "NA"){
        Dev += 0
    }
    else {
        Dev += 0
    }

    final_grade = ($("#IS201").val()) * 0.55 + ($("#quizzes").val()) * 0.10 +
        ($("#group_project").val()) * 0.05 + ($("#exams").val()) * 0.20 + ($("#intex").val()) * 0.10
    if (final_grade >= 94) {
        letter_grade = 'A'
    }
    else if (final_grade >= 90) {
        letter_grade = 'A-'
    }
    else if (final_grade >= 87) {
        letter_grade = 'B+'
    }
    else if (final_grade >= 84) {
        letter_grade = 'B'
    }
    else if (final_grade >= 80) {
        letter_grade = 'B-'
    }
    else if (final_grade >= 77) {
        letter_grade = 'C+'
    }
    else if (final_grade >= 74) {
        letter_grade = 'C'
    }
    else if (final_grade >= 70) {
        letter_grade = 'C-'
    }
    else if (final_grade >= 67) {
        letter_grade = 'D+'
    }
    else if (final_grade >= 64) {
        letter_grade = 'D'
    }
    else if (final_grade >= 60) {
        letter_grade = 'D-'
    }
    else {
        letter_grade = 'E You Failed. Sorry :('
    }
    document.getElementById("Output").innerHTML = "Your grade is: " + letter_grade
})