# Test-App
Containerized app with db-be-fe used for testing purposes and showcasing.
<br>
#### The application is currently developed for mobile devices only, it is recommended to navigate it using the responsive view in the developer tools of the browser.
<br>
Implemented technologies:
<ul>
<li>DB <strong>PostgreSQL</strong></li>
<li>BE in <strong>Java 17</strong> / <strong>Spring-Boot</strong> / <strong>Hibernate</strong></li>
<li>FE in <strong>Typescript</strong> / <strong>Angular 13</strong> (I don't know why, I usually go for Angular 15)</li>
</ul>
To start the application just execute from the root folder:
<br>
<br>
<code>docker-compose up -d</code>
<br>
<br>
<br>
Once the container is up and running, you can access the application from browser at: 
<br>
<h5>http://localhost:4200</h5>
Or test the REST api from the swagger at:
<br>
<h5>http://localhost:8080/swagger-ui.html</h5>
<br>
To stop the application and remove all the created images execute:
<br>
<br>
<code>docker-compose down --rmi all</code>
<br>
<br>
