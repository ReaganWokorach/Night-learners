addEventListener("DOMContentLoaded", function () {

    document.getElementById("booksBtn").addEventListener("click", function (e) {
    e.preventDefault(); // stop the link from reloading page

    document.getElementById("mainDiv").style.display = "none";   // hide dashboard
    document.getElementById("booksDiv").style.display = "block"; // show books section
    document.getElementById("membersDiv").style.display = "none";//hide memebers div
    document.getElementById("finesDiv").style.display = "none";//hide fines div
    document.getElementById("borrowDiv").style.display = "none";//hide borrow records div
});

    this.document.getElementById("membersBtn").addEventListener("click", function (e) {
    e.preventDefault(); // stop the link from reloading page

    document.getElementById("mainDiv").style.display = "none";    // hide dashboard
    document.getElementById("booksDiv").style.display = "none"; // hide bookks section
    document.getElementById("finesDiv").style.display = "none";//hide fines div
    document.getElementById("membersDiv").style.display = "block";//show memebers div
    document.getElementById("borrowDiv").style.display = "none";//hide borrow records div
});
    this.document.getElementById("borrowBtn").addEventListener("click", function (e) {
    e.preventDefault(); // stop the link from reloading page

    document.getElementById("mainDiv").style.display = "none";    // hide dashboard
    document.getElementById("booksDiv").style.display = "none"; // hide bookks section
    document.getElementById("membersDiv").style.display = "none";//hide memebers div
    document.getElementById("finesDiv").style.display = "none";//hide fines div
    document.getElementById("borrowDiv").style.display = "block";//show borrow records div
});

    this.document.getElementById("finesBtn").addEventListener("click", function (e) {
    e.preventDefault(); // stop the link from reloading page
    document.getElementById("mainDiv").style.display = "none";    // hide dashboard
    document.getElementById("booksDiv").style.display = "none"; // hide bookks section
    document.getElementById("membersDiv").style.display = "none";   //hide memebers div
    document.getElementById("borrowDiv").style.display = "none";//hide borrow records div 
    document.getElementById("finesDiv").style.display = "block";//show fines div
    });

});
