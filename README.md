

# CRUD TASKS AND SWAPI SERVERLESS APP

Es una aplicacion serverless que tiene dos funcionalidades:

### 1. Crud de tareas

  - Listado de tareas
  ```
  GET https://7hv7fthtvl.execute-api.us-east-2.amazonaws.com/dev/tasks
  ```
   - Obtener una tarea por Id
  ```
  GET https://7hv7fthtvl.execute-api.us-east-2.amazonaws.com/dev/tasks/66
  ```

   - Crear una tarea
  ```
  POST https://7hv7fthtvl.execute-api.us-east-2.amazonaws.com/dev/tasks
  
  Request Body:
    - description (string) - required
    - completed (boolean) - optional
  ```
  


   - Actualizar una tarea
  ```
  PUT https://7hv7fthtvl.execute-api.us-east-2.amazonaws.com/dev/tasks/66
  
  Request Body:
    - description (string) - required
    - completed (boolean) - optional
  ```

### 2. Endpoints hacia la api de SWAPI con traduccion de propiedades a español 

  - Listado de peliculas de starwars 
  ```
  GET https://7hv7fthtvl.execute-api.us-east-2.amazonaws.com/dev/starwars/films
  ```
   - Obtener Informacion sobre un personaje de starwars
  ```
  GET https://7hv7fthtvl.execute-api.us-east-2.amazonaws.com/dev/starwars/person/5
  ```
  Para poder traducir las propiedades al español agregar en el header la key **lang** y el value **es** o **en**.
  
  ```
  curl --location --request GET 'https://7hv7fthtvl.execute-api.us-east-2.amazonaws.com/dev/starwars/films' \
--header 'lang: es'
  ```
Por defecto las propiedades son en ingles ,y solo se aceptan valores como **es** o **en** , si ingresa otro valor las propiedades seran devueltas en ingles

