const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const cors = require("cors")
const path = require('path');
const productsRoute = require('./routes/productRouter')
const ordersRoute = require('./routes/orderRouter')
const userRoute = require('./routes/userRouter')
const dataSender = require('./routes/dataSender')


dotenv.config({ path: './config.env' })
port = process.env.port

//add request body to request object(middleware)
app.use(express.json())

// to allow the frontend to communicate with backend.
app.use(cors())


// Serve static files from the "img" folder
//in order to access those images from the frontend
app.use('/img', express.static(path.join(__dirname, 'img')));


mongoose.connect(process.env.CONN_STR).then((conn) => {
  console.log('DB connected successfully')
}).catch((error) => {
  console.log(error)
})

//this will create all products in the same time rather than create one by one
app.use("/api/send", dataSender);

app.use('/api/products', productsRoute)
app.use('/api/orders', ordersRoute)
app.use('/api/users', userRoute)



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
