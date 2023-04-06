<?php 
// Recipient email 
$toEmail = 'jessicavianey95@hotmail.com'; 
 
$status = 0; 
$statusMsg = 'Hay un error, intenta más tarde'; 
if(isset($_POST['contact_submit'])){ 
    // Get the submitted form data 
    $name = $_POST['Name']; 
    $asistiras = $_POST['respond']; 
    $message = $_POST['mensaje']; 
     
    // Check whether submitted data is not empty 
    if(!empty($asistiras) && !empty($name) && !empty($message)){ 
         
        $asistirasSubject = 'Confirmación por'.$name; 
        $htmlContent = '<h2>Información del Invitado</h2> 
            <h4>Nombre</h4><p>'.$name.'</p> 
            <h4>Asistirás a la boda?</h4><p>'.$asistiras.'</p> 
            <h4>Mensaje para los novios</h4><p>'.$message.'</p>'; 
            
        // Set content-type header for sending HTML email 
        $headers = "MIME-Version: 1.0" . "\r\n"; 
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
            
        // Additional headers 
        $headers .= 'Para: '.$name.'<'.$asistiras.'>'. "\r\n"; 
            
        // Send email 
        $sendEmail = mail($toEmail, $asistirasSubject, $htmlContent, $headers); 
        if($sendEmail){ 
            $status = 1; 
            $statusMsg = 'Gracias por Confirmar!'; 
        }else{ 
            $statusMsg = 'Hubo un error, por favor intenta otra vez'; 
        } 
        
    }else{ 
        $statusMsg = 'Por favor rellena los campos'; 
    } 
} 
 
$response = array( 
    'status' => $status, 
    'message' => $statusMsg 
); 
echo json_encode($response); 
?>