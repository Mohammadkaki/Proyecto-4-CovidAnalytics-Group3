<?php
      // 1. Conectar con la BD
      $servername = "localhost";
      $database = "covid_analytics";
      $username = "robert";
      $password = "12345";

      // Create connection
      $conn = mysqli_connect($servername, $username, $password, $database);

      // Check connection
      if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
      }

      echo "Connected successfully \n";
      // Fin conectar con la BD
      
      // 1. Sacar datos de la tabla datas

   

      $query_para_sacar_datos_de_la_tabla_datas = "SELECT * FROM datas";
      
      $result = mysqli_query($conn, $query_para_sacar_datos_de_la_tabla_datas);
      
      // 2. inertar los datos por filas en la tabla entries
      if($result){
            
            while($row = mysqli_fetch_assoc($result)){
                  echo "\n";
                  
                  $query = "SELECT id FROM countries WHERE countriesAndTerritories = '".$row['countriesAndTerritories']."'";
      
                  $result1 = mysqli_query($conn, $query);

                  $country_id = mysqli_fetch_assoc($result1)['id'];
                  $dateRep = $row['dateRep'];
                  $day = $row['day'];
                  $month = $row['month'];
                  $year = $row['year'];
                  $cases = $row['cases'];
                  $deaths = $row['deaths'];
                  $acumulative_number_for_14_days_of_COVID = $row['acumulative_number_for_14_days_of_covid'];
                  //print_r($row);
                  $query_insertar_en_entries = "INSERT INTO entries (country_id, dateRep, day, month, year, cases, deaths, acumulative_number_for_14_days_of_COVID) VALUES (".$country_id.",'".$dateRep."', ".$day.", ".$month.", ".$year.", ".$cases.", ".$deaths.", ".$acumulative_number_for_14_days_of_COVID.");";
                  
                  mysqli_query($conn, $query_insertar_en_entries);
            }

            
      }
      
      // cerrar la conx
      mysqli_close($conn);
?>
