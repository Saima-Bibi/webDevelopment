<?php
// Replace these values with your actual database credentials
$host = "localhost";
$user = "root";
$pass = "";
$db = "beauty_salon";

// Create a connection to the database
$con =mysqli_connect($host, $user, $pass, $db);

// Check the connection
if ($con) {
    echo"ok";
}
        else{
            echo "not connected";
        }

