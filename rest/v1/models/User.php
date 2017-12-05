<?php if(!defined('SPECIALCONSTANT')) die(json_encode([array('id'=>'0','error'=>'Acceso Denegado')]));



$app->post("/login/",function() use($app) {
	$objDatos = json_decode(file_get_contents("php://input"));

	$email = $objDatos->email;
	$pwd = $objDatos->pwd;

	try {
		$conex = getConex();

		$result = $conex->prepare("CALL pSession('$email','$pwd');");

		$result->execute();
		$res = $result->fetchObject();

		$conex = null;

		$app->response->headers->set("Content-type","application/json");
		$app->response->headers->set('Access-Control-Allow-Origin','*');
		$app->response->status(200);
		$app->response->body(json_encode($res));

	}catch(PDOException $e) {
		echo "Error: ".$e->getMessage();
	}
});
