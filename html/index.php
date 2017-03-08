<?php
		  /* Connect to MySQL and select the database. */
		  $connection = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD);

		  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();

		  if (!mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();

		  $database = mysqli_select_db($connection, DB_DATABASE);

		  /* Ensure that the Employees table exists. 
		  VerifyPruebaTable($connection, DB_DATABASE); 

		  /* If input fields are populated, add a row to the Employees table. */
		  $idprueba = htmlentities($_POST['idprueba']);

		  if (strlen($idprueba)) {
		    AddEmployee($connection, $idprueba);
		  }*/
		?>
<?php header('Location:/formulario.html'); ?>
