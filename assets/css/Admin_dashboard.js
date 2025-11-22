document.addEventListener("DOMContentLoaded", function () {
    // Main wrapper and sections
    const wrapper = document.getElementById("wrapper");
    const mainDiv = document.getElementById("mainDiv");
    const booksDiv = document.getElementById("booksDiv");
    const membersDiv = document.getElementById("membersDiv");
    const borrowDiv = document.getElementById("borrowDiv");
    const finesDiv = document.getElementById("finesDiv");
    const addBookForm = document.getElementById("addBookForm");
    const addMemberForm = document.getElementById("addMemberForm");
    const clearFineForm = document.getElementById("clearFine");

    // Buttons
    const booksBtn = document.getElementById("booksBtn");
    const membersBtn = document.getElementById("membersBtn");
    const borrowBtn = document.getElementById("borrowBtn");
    const finesBtn = document.getElementById("finesBtn");
    const addBookBtn = document.getElementById("AddbookBtn");
    const addMemberBtn = document.getElementById("addMemberBtn");
    const clearBalanceBtn = document.getElementById("clearBalanceBtn");
    const logoutBtn = document.getElementById("logout");

    const addBookCancelBtn = document.getElementById("addBookCancelBtn");
    const addMemberCancelBtn = document.getElementById("addMemberCancelBtn");
    const clearBalanceCancelBtn = document.getElementById("clearBalanceCancelBtn");

    // Helper to hide all main sections
    function hideAllSections() {
        mainDiv.style.display = "none";
        booksDiv.style.display = "none";
        membersDiv.style.display = "none";
        borrowDiv.style.display = "none";
        finesDiv.style.display = "none";
        addBookForm.style.display = "none";
        addMemberForm.style.display = "none";
        clearFineForm.style.display = "none";
        wrapper.style.opacity = "1";

        // Hide action buttons
        addBookBtn.style.display = "none";
        addMemberBtn.style.display = "none";
        clearBalanceBtn.style.display = "none";
    }

    // Show a section and optionally action buttons
    function showSection(section, showAddBook = false, showAddMember = false, showClearBalance = false) {
        section.style.display = "block";
        if (showAddBook) addBookBtn.style.display = "inline-block";
        if (showAddMember) addMemberBtn.style.display = "inline-block";
        if (showClearBalance) clearBalanceBtn.style.display = "inline-block";
    }

    // Section buttons
    if (booksBtn) {
        booksBtn.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(booksDiv, true, false, false);
        });
    }

    if (membersBtn) {
        membersBtn.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(membersDiv, false, true, false);
        });
    }

    if (borrowBtn) {
        borrowBtn.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(borrowDiv);
        });
    }

    if (finesBtn) {
        finesBtn.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(finesDiv, false, false, true);
        });
    }

    // Add Book form
    if (addBookBtn) {
        addBookBtn.addEventListener("click", function () {
            addBookForm.style.display = "block";
            wrapper.style.opacity = "0.1";
        });
    }

    if (addBookCancelBtn) {
        addBookCancelBtn.addEventListener("click", function (e) {
            e.preventDefault();
            addBookForm.style.display = "none";
            wrapper.style.opacity = "1";
        });
    }

    // Add Member form
    if (addMemberBtn) {
        addMemberBtn.addEventListener("click", function () {
            addMemberForm.style.display = "block";
            wrapper.style.opacity = "0.1";
        });
    }

    if (addMemberCancelBtn) {
        addMemberCancelBtn.addEventListener("click", function (e) {
            e.preventDefault();
            addMemberForm.style.display = "none";
            wrapper.style.opacity = "1";
        });
    }

    // Clear Fine form
    if (clearBalanceBtn) {
        clearBalanceBtn.addEventListener("click", function () {
            clearFineForm.style.display = "block";
            wrapper.style.opacity = "0.1";
        });
    }

    if (clearBalanceCancelBtn) {
        clearBalanceCancelBtn.addEventListener("click", function (e) {
            e.preventDefault();
            clearFineForm.style.display = "none";
            wrapper.style.opacity = "1";
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            window.location.href = "../logout.php";
        });
    }

    // Initially show main dashboard
    // hideAllSections();
    // mainDiv.style.display = "block";
});
