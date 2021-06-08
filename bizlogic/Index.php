<?php
        $link = mysqli_connect('localhost', 'root', '', 'Exam','3307');
        session_start();

        

if($_SERVER["REQUEST_METHOD"] == "POST"){
 
    
        $param_username = $_POST["username"];
        $password = $_POST["password"] ;
        $sql = "SELECT id, username, password FROM user WHERE username = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
           
            mysqli_stmt_bind_param($stmt, "s", $param_username);
            
            if(mysqli_stmt_execute($stmt)){
                
                mysqli_stmt_store_result($stmt);
                
            
                if(mysqli_stmt_num_rows($stmt) == 1){                    
                    mysqli_stmt_bind_result($stmt, $id, $username, $hashed_password);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($password, $hashed_password)){
                          
                            session_start();
                            
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["username"] = $username;                            
                           
                            return true;
                            
                        } else{
                            return false;
                        } 

                    }
                } 
            } 

       
            mysqli_stmt_close($stmt);
        }
    }
    

    mysqli_close($link);
}
?>


