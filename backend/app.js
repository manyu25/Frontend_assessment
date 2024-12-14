const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');




const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);


sequelize.sync().then(() => {
  app.listen(5001, () => console.log('Backend running on http://localhost:5001'));
}).catch(err => console.error(err));
