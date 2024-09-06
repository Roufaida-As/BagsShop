const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const productsRoute = require('./routes/productRouter')
const dataSender = require('./routes/dataSender')

dotenv.config({ path: './config.env' })
port = process.env.port

mongoose.connect(process.env.CONN_STR).then((conn) => {
  console.log('DB connected successfully')
}).catch((error) => {
  console.log(error)
})

//this will create all products in the same time rather than create one by one
app.use("/api/send", dataSender);

app.use('/api/products', productsRoute)



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
