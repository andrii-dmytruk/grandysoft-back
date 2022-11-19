# REST API 

[DEMO LINK](https://grandsoft-test-app.onrender.com/)

<hr />

Server that generates provided number of users with random data.
Database and node.js app are deployed on [render](https://render.com/).
Implemented using:
  - Node.js
  - Express
  - PostgreSQL
  - Sequelize
  
<hr />

# Usage
Just follow the [DEMO LINK](https://grandsoft-test-app.onrender.com/) and use one of endpoints.\
Please note that the first launch may take some time because I use free hosting service.

<hr />

# Endpoints
  - `/users` get all users
  - `/users/<id>` get one user with id = `<id>`
  - `/users/<id>/friends` get user's friends (mutual following)
  - `/users/<id>/friends?sort_by=<byValue>&sort_type=<typeValue>` (optional) same as previus but with sorting. `<byValue>` can be `id` or `first_name`, `<typeValue>` can be `asc` or `desc`. Default values `id, asc`.
  
  - `/max-following` get top 5 users with max following.
  - `/max-following?usersCount=<NUMBER>` (optional) get top `<NUMBER>` users with max following.
  
  - `/not-following` get all users with zero following
  
  - `/reset` generates new data
  - `/reset?usersCount=<NUMBER>` (optional) generates users in `<NUMBER>` count. Default value = 200
  
