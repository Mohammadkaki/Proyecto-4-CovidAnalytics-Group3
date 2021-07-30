Group memeber:
   <ol>
    <li>Mohammad Ibrahim kaki</li>
    <li>Roberto Carlo</li>
   <li>Maria Urbana</li>
    <li>Pablo</li>
    </ol>

<p> Project Link chart : https://mohammadkaki.github.io/proyecto-4-CovidAnalytics-Group3/pages/charts/chartjs.html </p>

<p> Back Log link :  https://docs.google.com/document/d/1gs08N3Kzi3MrNWFmMBtIlkBy9ex-xwW27cdnZcBqzH0/edit?usp=sharing <p>

<p> Trello : https://trello.com/invite/b/Ojf2oySf/86183819f8c90d2c2fc7226007de2f9d/covidanalytics-grupo3 <p>



### Contexto

En la actualidad existen muchos bancos de datos que registran eventos mundiales, ya sean tendencias en moda, redes sociales o incluso pandemias. El acceso a estos datos es importante para realizar estudios de crecimiento, propagación o cualquier análisis estadístico. Estos análisis suelen venir acompañados con gráficas estadísticas que representan la información tratada.

En anteriores proyectos se ha hecho un pequeño acercamiento a la estadística, mostrando el número de elementos completados sobre el total de elementos creados. Ahora vamos a implementar alguna libreria.

### ¿Qué vamos a hacer?

✅Los datos serán facilitados en bruto mediante algún script. Estos datos serán modelados previamente para que encajen con los modelos futuros.

✅Crearemos un backend base en Laravel para manipular los datos.

✅Implementaremos la libreria de char.js para mostrar las gráficas en una plantilla facilitada por nosotros.

### 🛠️ Entrando en faena

Tenemos los datos en bruto en una tabla poco edificiente, de la siguiente manera:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/44716fbb-bb5a-4e7a-b0bb-3923dbc59834/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/44716fbb-bb5a-4e7a-b0bb-3923dbc59834/Untitled.png)

La poca eficiencia además de otros posibles problemas de coherencia se deben a que la tabla no respeta el modelo entidad-relación. 

Por lo que vuestra primera tarea será adaptarlo. 

De esta forma, si hubiera que realizar algún cambio en los nombres de los paises, o en la estructura de datos que almacenamos de ellos no tendremos que realizar cada cambio sobre cada uno de los registros (son 61150 en total), ya que esto podría ocasionar errores al tener nombres diferentes para un mismo país o seguir teniendo registros tras haberlo borrado (errores de coherencia).

### 🗄️ Esquema BD

El esquema básico tras obtener los datos en bruto de la fuente es este:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/42b647bb-9ba4-427c-bde1-0e068b85937e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/42b647bb-9ba4-427c-bde1-0e068b85937e/Untitled.png)

Un esquema un poco más eficiente sería este:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c2be652-8700-4959-b4e7-3dbbd0ab044e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c2be652-8700-4959-b4e7-3dbbd0ab044e/Untitled.png)

Utiliza este último para diseñar la base de datos que obtengas tras manipular los datos.

Scripts de inicio:

- [SQL](https://github.com/aberkanimed/Don-Bosco-F5/blob/main/Proyectos/Proyecto-4-CovidAnalytics/ScriptsBD/data.sql)
- [CSV](https://github.com/aberkanimed/Don-Bosco-F5/blob/main/Proyectos/Proyecto-4-CovidAnalytics/ScriptsBD/data.csv)

### ⚙️ Modelando los datos

- Lo harás mediante un script de PHP una vez hayas [creado las tablas](https://github.com/aberkanimed/Don-Bosco-F5/blob/main/Proyectos/Proyecto-4-CovidAnalytics/ScriptsBD/scriptCountriesTable.sql).
- La tabla 'region' puedes crearla manualmente ya que solo son 6 registros, también puedes hacer un 'group by' por región y obtener los 6 nombres.

```sql
INSERT INTO regions (continentExp) 
SELECT continentExp FROM datas GROUP BY continentExp;
```

*Como veis en estas consultas primero estamos haciendo un SELECT de la tabla data (datos en bruto) donde solo traemos el listado de continentes sin repetir. Despues insertamos esos mismo datos. Os animo a probar las consultas por separado.

- Para la tabla countries necesitarás el primero, tienes que agrupar por geoId (por ejemplo) y cada uno de los resultados insertarlos en la tabla.

```sql
INSERT INTO countries [faltan datos] 
SELECT region.id, [faltan datos]
JOIN region ON datas.continentExp = region.continentExp
GROUP BY region.id, [faltan datos];
```

*Cómo ves la consulta está incompleta y tienes que completarla para que funcione, borra donde pone [faltan datos] y sustitúyelo por la consulta completa.

- Popular la tabla de entries es algo más peliagudo, aquí tendras que usar tus habilidades de php y de buscar en google, ya que la solución está ahí (yo no sabía como hacerlo y lo solucioné buscando).

    Primero hay que conectarse con la base de datos y consultar los datos de la tabla 'datas'. Con este resultado realizamos un bucle while donde en cada iteración, insertaremos los datos extraidos de la consulta anterior, junto con el 'country_id' correspondiente. Para saber este 'country_id' hay que consultar la tabla de 'countries'.

### 🖥️ Plantilla base

Cómo este proyecto no trata de HTML y esto puede consumir tiempo, os facilito [esta plantilla](https://github.com/aberkanimed/Don-Bosco-F5/tree/main/Proyectos/Proyecto-4-CovidAnalytics/LayoutBase) con lo necesario (está subida al repositorio). Solo tendreis que utilizar los datos de vuestra API en los charts y colocar alguno en la página home.

¡Mucha suerte!

### 💪 EXTRAS

Si has realizado todo lo demás os ofrezco un extra, hay una página para mapas con dos mapas básicos de google maps. Podeis geolocalizar los paises en funcion de su geoId y mostrar algunos datos escogidos en un marcador.

Combinando Chars y Mapas puede hacerse una web bastante interesante.



