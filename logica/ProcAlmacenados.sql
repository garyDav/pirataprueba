DROP PROCEDURE IF EXISTS pSession;
CREATE PROCEDURE pSession (
	IN v_email varchar(50),
	IN v_pwd varchar(50)
)
BEGIN
	INSERT INTO cuentas VALUES(null,v_email,v_pwd);
	SELECT @@identity AS id,'not' AS error,'mensaje' msj;
END //