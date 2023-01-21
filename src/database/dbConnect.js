const mongoose = require("mongoose"); 
const user = require('./useSchema');
const DB_URI = 'mongodb+srv://root:root@cluster0.rvw7i.mongodb.net/Training?retryWrites=true&w=majority';
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected');
  });
