<!DOCTYPE html>
<?php
include 'connectsign.php';

if (isset($_POST['signup'])) {
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $pass = mysqli_real_escape_string($con, $_POST['password']);
    

    if (empty($name)) {
        $error = "Username is required";
    } elseif (empty($email)) {
        $error = "Email is required";
    } elseif (empty($pass)) {
        $error = "Password is required";
    }  elseif (strlen($name) < 3 || strlen($name) > 30) {
        $error = "Username must be between 3 and 30 characters";
    } elseif (strlen($pass) < 6) {
        $error = "Password must be at least 6 characters long";
    } else {
        $checkemail = "SELECT * FROM customers WHERE email='$email'";
        $data = mysqli_query($con, $checkemail);

      if (mysqli_num_rows($data) > 0) {
    $error = "Email already exists";
}    
    else {
    // Consider using a more secure hashing method, e.g., password_hash
    $inser = "INSERT INTO customers (`name`, `email`, `password`) VALUES ('$name', '$email' , '$pass')";
    $q = mysqli_query($con, $inser);

    if ($q) {?>
        <script type="text/javascript">
    alert("Account created sccessfully");
    </script>
    <?php } else {
        $error = "Error creating account: " . mysqli_error($con);
    }
}}
}

if (isset($_POST['login'])){

    $email = $_POST['email'];
    $password = $_POST['password'];
    $query = mysqli_query($con, "SELECT * FROM customers WHERE email = '$email'");
    $no = mysqli_num_rows($query);

    if($no>0){
        $data = mysqli_fetch_assoc($query);
        if($data['password']==$password){
            echo "login Successfully";
            {?>
                <script type="text/javascript">
            window.location.assign("index.html");
            alert("Login sucessfully")
            </script>
            <?php }
        }
        else{
            echo "Wrong Password";
        }
    }
    else{
        echo "Wrong Email";
    }
}

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in || Sign up from</title>
     <!-- font awesome icons -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- css stylesheet -->
    <link rel="stylesheet" href="pro.css">
</head>
<body>
 
<?php
    if(isset($error)){
      echo $error;
     }?> 

    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="" method="post" >
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <div class="infield">
                    <input type="text" placeholder="Name" name="name"  />
                    <label></label>
                </div>
                <div class="infield">
                    <input type="email" placeholder="Email" name="email"/>
                    <label></label>
                </div>
                <div class="infield">
                    <input type="password" placeholder="Password" name="password" />
                    <label></label>
                </div>
                <button type="submit" name="signup">Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="" method="post">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <div class="infield">
                    <input type="email" placeholder="Email" name="email" required/>
                    <label></label>
                </div>
                <div class="infield">
                    <input type="password" placeholder="Password" name="password" required />
                    <label></label>
                </div>
                <a href="#" class="forgot">Forgot your password?</a>
                <button type="submit"  name="login"  >Sign In</button>
            </form>
        </div>
        <div class="overlay-container" id="overlayCon">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>Your Beauty Journey Continues Here. Sign In & Shine Brighter.</p>
                    <button type="submit">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Ready to Glow?</h1>
                    <p>Sign Up for Special Treats & Access Our Exclusive Beauty Tips.</p>
                    <button type="submit" name="submit" >Sign Up</button>
                </div>
            </div>
            <button id="overlayBtn"></button>
        </div>
    </div>

    
    
    <!-- js code -->
    <script>
       
 
        const container = document.getElementById('container');
        const overlayCon = document.getElementById('overlayCon');
        const overlayBtn = document.getElementById('overlayBtn');
        
        overlayBtn.addEventListener('click', ()=>{
            container.classList.toggle('right-panel-active');
            
            overlayBtn.classList.remove('btnScaled');
            window.requestAnimationFrame( ()=> {
                overlayBtn.classList.add('btnScaled');
            })
        });
        
    </script>

</body>
</html>

