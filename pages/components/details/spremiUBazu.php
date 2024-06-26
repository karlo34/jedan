<?php
// header('Content-Type: application/json');

// // Get form data
// $name = $_POST['name'];
// $email = $_POST['email'];

// // Connect to MySQL database
// $servername = "localhost";
// $username = "username";
// $password = "password";
// $dbname = "my_database";

// console.log("Connect");

// $conn = new mysqli($servername, $username, $password, $dbname);

// // Check connection
// if ($conn->connect_error) {
//     die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
// }

// // Insert data into MySQL table
// $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
// if ($conn->query($sql) === TRUE) {
//     echo json_encode(['message' => 'Data saved successfully']);
// } else {
//     echo json_encode(['error' => 'Error: ' . $sql . '<br>' . $conn->error]);
// }

// // Close MySQL connection
// $conn->close();
?>