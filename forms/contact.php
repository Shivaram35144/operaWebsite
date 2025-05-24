<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer autoload or include PHPMailer manually
require '../assets/vendor/phpmailer/PHPMailer.php';
require '../assets/vendor/phpmailer/SMTP.php';
require '../assets/vendor/phpmailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $mail = new PHPMailer(true);

  try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP host
    $mail->SMTPAuth = true;
    $mail->Username = 'karthikeyanosim@gmail.com'; // Replace with your email
    $mail->Password = 'avcp lcsr qdzs ffvl';    // Use Gmail App Password 
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Email headers
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('karthikeyanosim@gmail.com');
    $mail->Subject = $_POST['subject'];

    // Email content
    $body = "You have received a new message from your OPERA Website contact form:\n\n";
    $body .= "Name: " . htmlspecialchars($_POST['name']) . "\n";
    $body .= "Email: " . htmlspecialchars($_POST['email']) . "\n";
    $body .= "Message:\n" . htmlspecialchars($_POST['message']);

    $mail->Body = $body;

    $mail->send();
    echo 'Message sent successfully!';
  } catch (Exception $e) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
  }
}
?>
