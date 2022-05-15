const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');

require('dotenv').config();

const app = express();
const userRoute = require('./src/routes/userRoutes');
const productRoute = require('./src/routes/productRoutes');
const googleRoute = require('./src/routes/googleAuthRoutes');
const passport = require('./src/utils/passport');

//Middlewares
app.use(bodyParser.json([]));
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  })
);
// app.use(cors());
// app.use(passport.initialize());
// app.use(passport.session());
app.use(
  cors({
    origin: 'http://127.0.0.1:3000',
    methods: 'GET,POST, PUT, DELETE',
    credentials: true,
  })
);

//Routes
app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/', googleRoute);

//Server
const db = process.env.DB_URL;

mongoose.connect(db).then(() => {
  console.log('DB connected');
});

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
