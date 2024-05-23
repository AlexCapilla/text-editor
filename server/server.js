// console.log("Current working directory:", process.cwd());


// const express = require('express');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.static('../client/dist'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// require('./server/routes/htmlRoutes')(app);

// app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));


const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

console.log("Current working directory:", process.cwd());
console.log("Serving static files from:", path.join(__dirname, '../client/dist'));

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
