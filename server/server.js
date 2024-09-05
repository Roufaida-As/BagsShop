const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' })
port=process.env.port

//add request body to request object(middleware)
app.use(express.json())


//just a test
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
