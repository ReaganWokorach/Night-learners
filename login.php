<?php
session_start();
include ('db_connect.php');

$error = '';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if(empty($username) || empty($password)){
        $error = "Please enter both username and password.";
    } else {
        // staff login check 

        $stmt = $conn-> prepare("SELECT * FROM staff WHERE username = ?");
        $stmt-> bind_param("s", $username);
        $stmt-> execute();
        $staffResult = $stmt->get_result();

        if($staffResult->num_rows === 1){
            $staff = $staffResult->fetch_assoc();

            if(password_verify($password, $staff['password'])){
                $_SESSION['staff_id'] = $staff['id'];
                $_SESSION['username'] = $staff['username'];
                $_SESSION['role']      = 'staff';

                header("Location: staff/dashboard.php");
                exit();
            }else{
                $error = "Invalid Password";
            }
        }
        $stmt->close();
// member login check 

        $stmt2 = $conn->prepare("SELECT * FROM members WHERE username = ?");
        $stmt2->bind_param("s", $username);
        $stmt2->execute();
        $memberResult = $stmt2->get_result();

        if ($memberResult->num_rows === 1) {
            $member = $memberResult->fetch_assoc();

            if (password_verify($password, $member['password'])) {
                $_SESSION['member_id'] = $member['id'];
                $_SESSION['username'] = $member['username'];
                $_SESSION['role'] = 'member';

                header("Location: members/dashboard.php");
                exit();
            } else {
                $error = "Invalid password.";
            }
        } else {
            $error = "No user found with that username.";
        }

        $stmt2->close();
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Library System Login | Cavendish University</title>
  <link rel="stylesheet" href="assets/css/form.css" />
</head>
<body>
  <div class="login-container">
    <img src="cavendish_logo.png" alt="Cavendish University Logo" class="logo" />
        <h1><b>Library System Login</b></h1>
     <?php if ($error): ?>
            <div class="error"><?= htmlspecialchars($error) ?></div>
        <?php endif; ?>   
    <form class="login-form" method="POST">
      <h3>Username</h3>
      <input type="text" placeholder="Enter username" name="username" required/>
      <h3>Password</h3>
      <input type="password" placeholder="Enter password" name="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</body>
</html>
