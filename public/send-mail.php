<?php
// Prevent direct access
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// CORS Headers (allow any origin for now, or restrict to your domain)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// CONFIGURATION
$recipient_email = "office@distechsol.com"; // Your email address
$site_name = "DisTechSol";

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate input
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$subject = filter_var($data['subject'] ?? '', FILTER_SANITIZE_STRING);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

// Email Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$site_name} Website <no-reply@distechsol.com>" . "\r\n"; // Use a domain email if possible
$headers .= "Reply-To: {$email}" . "\r\n";

// Email Subject
$email_subject = "New Contact Form Submission: " . ($subject ? $subject : "No Subject");

// Email Body
$email_body = "
<html>
<head>
    <title>New Contact Request</title>
</head>
<body>
    <h2>New Message from {$site_name} Website</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Subject:</strong> {$subject}</p>
    <hr>
    <p><strong>Message:</strong><br>{$message}</p>
</body>
</html>
";

// Send Email
if (mail($recipient_email, $email_subject, $email_body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Server mail() function failed.']);
}
?>
