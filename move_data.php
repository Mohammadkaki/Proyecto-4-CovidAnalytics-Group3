<?php
      // 1. Conectar con la BD
      $servername = "localhost";
      $database = "covid_analytics";
      $username = "Mohammadkaki";
      $password = "123456789";

      // Create connection
      $conn = mysqli_connect($servername, $username, $password, $database);

      // Check connection
      if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
      }

      echo "Connected successfully \n";
      // Fin conectar con la BD
      
      // 1. Sacar datos de la tabla datas

      // SELECT entries.id, country_id, dateRep, day, month, year, cases, deaths, acumulative_number_for_14_days_of_COVID FROM datas
      // JOIN entries ON datas.dateRep = entries.dateRep
      // GROUP BY entries.id, country_id, dateRep, day, month, year, cases, deaths, acumulative_number_for_14_days_of_COVID

      $query1 = "SELECT * FROM datas";
      
      $result = mysqli_query($conn, $query1);

      // 2. inertar los datos por filas en la tabla entries
      if($result){
           
            while($row = mysqli_fetch_assoc($result)){
                  echo "\n";
                  $query2 = "SELECT id FROM countries WHERE countriesAndTerritories = '".$row['countriesAndTerritories']."'";    
                  $result1 = mysqli_query($conn, $query2);
                  $country_id = mysqli_fetch_assoc($result1)['id'];
                  $dateRep = $row['dateRep'];
                  $day = $row['day'];
                  $month = $row['month'];
                  $year = $row['year'];
                  $cases = $row['cases'];
                  $deaths = $row['deaths'];
                  $acumulative_number_for_14_days_of_COVID = $row['Acumulative_number_for_14_days_of_COVID'];
                  $query_insertar_en_entries = "INSERT INTO entries (country_id, dateRep, day, month, year, cases, deaths, acumulative_number_for_14_days_of_COVID) VALUES (".$country_id.",'".$dateRep."', ".$day.", ".$month.", ".$year.", ".$cases.", ".$deaths.", ".$acumulative_number_for_14_days_of_COVID.");";
                  print_r($query_insertar_en_entries);
                  mysqli_query($conn, $query_insertar_en_entries);
            }
      }
      
      // cerrar la conx
      mysqli_close($conn);
