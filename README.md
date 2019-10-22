### Login to the database
- Create a `.env` file similar to the `.env.example.env` or modify the current file
- Include your PostgreSQL username, password, database and port.

 ### Map the data
- Modify the App.js file when mapping the data so that it corresponds to the database collumn name

- `{item.<yourCollumnName>}`

 ### Configure the PostgreSQL query
- The query in api.js must correspond to the database table name

- `client.query("SELECT * FROM <yourTableName>", function(err, result) {})`

 ### Start your API
- `$node api.js` 

- API local endpoint: http://localhost:8080/api.json