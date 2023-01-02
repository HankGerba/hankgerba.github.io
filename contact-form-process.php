<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Validate the form data
  if (empty($_POST['name']) || empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    // Display an error message
    echo 'Please enter a valid name and email address.';
  } else {
    // Send the email
    $to = 'hank.g@icloud.com';
    $subject = 'Message from ' . $_POST['name'];
    $message = $_POST['message'];
    $headers = 'From: ' . $_POST['email'];

    mail($to, $subject, $message, $headers);

    // Display a success message
    echo 'Your message has been sent successfully!';
  }
}

?>

<form action="form.php" method="post">
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"><br>
  <label for="email">Email:</label><br>
  <input type="text" id="email" name="email"><br>
  <label for="message">Message:</label><br>
  <textarea id="message" name="message" rows="5" cols="40"></textarea><br><br>
  <input type="submit" value="Submit">
</form> 