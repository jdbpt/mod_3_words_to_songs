const express = require('express');
require('dotenv').config();
const path = require('path');
const logger = require('morgan');
const port = process.env.PORT || 5000;//or to catch if env file not have a port


// mongoose.connect(
// 'mongodb+srv://username:password@cluster0-erizp.mongodb.net/database?retryWrites=true&w=majority'
// , {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
