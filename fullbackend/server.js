// server.js ka kam hote hai ki ye file app.js ko import karke usko run karna.

const app = require('./src/app');

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})