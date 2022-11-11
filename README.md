# express-mongo-starter
NodeJS Express Starter-Template-App using Docker 

  This is a simple Express Application which contains 2 routes
  
    1. /      (Get)  ==> which responds with a text "Welcome" 
    2. /hello (Get)  ==> which responds with a text "hello"
    3. /user  (Post) ==> which posts user content to the end point
    4. /user  (Get)  ==> returns the user data as response.
  ---
  Packages Used 
  
    - Express
    - Nodemon
    - Mongoose
    
    Volumes are mapped to sync changes
 ---
 Commands
 ```
 docker-compose build
 docker-compose up -d
 docker-compose down
 ```

