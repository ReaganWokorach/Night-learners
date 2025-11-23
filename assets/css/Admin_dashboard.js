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
    // const memberTableBody = document.getElementById("memberTableBody");

    // Buttons
    const booksBtn = document.getElementById("booksBtn");
    const membersBtn = document.getElementById("membersBtn");
    const borrowBtn = document.getElementById("borrowBtn");
    const finesBtn = document.getElementById("finesBtn");
    const addBookBtn = document.getElementById("AddbookBtn");
    const addMemberBtn = document.getElementById("addMemberBtn");
    const clearBalanceBtn = document.getElementById("clearBalanceBtn");
    const logoutBtn = document.getElementById("logout");
    const dashboardBtn = document.getElementById("dashboardBtn");

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


    // Books button and fetching books logic 
    if (booksBtn) {
        booksBtn.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(booksDiv, true, false, false);
            // Fetch and display books
            const bookTableBody = document.getElementById("bookTableBody");
            bookTableBody.innerHTML = ""; // Clear existing data
            fetch("/CAT2/Night-learners/staff/books/view_books.php")
                .then(response => response.json())
                .then(data => {
                    console.log("Fetched books:", data);
                    data.forEach(book => {
                        console.log("Book:", book);
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td>${book.id}</td>
                            <td>${book.isbn}</td>
                            <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.category}</td>
                            <td>${book.copies_total}</td>
                            <td>${book.copies_available}</td>
                            <td>${book.created_at}</td>
                        `;
                        bookTableBody.appendChild(row);
                    });

                    //calculate and display total books
                    const totalBooks = data.length;
                    const totalCopies = data.reduce((sum, book) => sum + parseInt(book.copies_total), 0);
                    const totalAvailable = data.reduce((sum, book) => sum + parseInt(book.copies_available), 0);

                    document.getElementById("totalBookCard").textContent = totalCopies;
                    document.getElementById("borrowedBooksCard").textContent = totalCopies - totalAvailable;

                })
                .catch(error => {
                    console.error("Error fetching books:", error);
                });
        });
    }

    // Members button and fetching members logic
    if (membersBtn) {
        membersBtn.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showSection(membersDiv, false, true, false);
            // Fetch and display members
            const memberTableBody = document.getElementById("memberTableBody");
            memberTableBody.innerHTML = ""; // Clear existing data
            fetch("/CAT2/Night-learners/members/view_members.php")
                .then(response => response.json())
                .then(data => {
                    console.log("Fetched members:", data);
                    data.forEach(member => {
                        console.log("Member:", member);
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td>${member.id}</td>
                            <td>${member.reg_no}</td>
                            <td>${member.full_name}</td>
                            <td>${member.email}</td>
                            <td>${member.phone}</td>
                            <td>${member.status}</td>
                            <td>${member.created_at}</td>
                        `;
                        memberTableBody.appendChild(row);
                    });
                })
                .catch(error => {
                    console.error("Error fetching members:", error);
        });
    });

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

        // Initial load of dashboard data
        function loadDashboardData() {

    // Load Books 
        fetch("/CAT2/Night-learners/staff/books/view_books.php")
            .then(res => res.json())
            .then(data => {
                console.log("Books data:", data);
                const totalCopies = data.reduce((sum, b) => sum + parseInt(b.copies_total), 0);
                const totalAvailable = data.reduce((sum, b) => sum + parseInt(b.copies_available), 0);

                document.getElementById("totalBookCard").textContent = totalCopies;
                document.getElementById("borrowedBooksCard").textContent = totalCopies - totalAvailable;
            })
            .catch(err => console.error("Books load error:", err));


        //Load Members
        fetch("/CAT2/Night-learners/members/view_members.php")
            .then(res => res.json())
            .then(data => {
                console.log("Members data:", data);
                document.getElementById("activeMembersCard").textContent = data.length;
            })
            .catch(err => console.error("Members load error:", err));


            // Load Fines
            fetch("/CAT2/Night-learners/fines/view_fines.php")
                .then(res => res.json())
                .then(data => {
                    console.log("Fines data:", data);
                    const totalFines = data.reduce((sum, f) => sum + parseInt(f.amount), 0);
                    document.getElementById("totalFinesCard").textContent = totalFines;
                })
                .catch(err => console.error("Fines load error:", err));
            }
    }
    loadDashboardData();



    //refesh the page on clicking dashboard 

});
