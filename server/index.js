const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();

const corsOpts = {
  origin: 'http://localhost:1234',
};

app.use(cors(corsOpts));

app.use(express.static('dist'));

app.get('/api/message', (req, res) => {
  res.send({ message: 'YOUR EXPRESS BACK END IS SUPER CONNECTED TO REACT' });
});

app.listen(port, () => console.log('Listening on port 3000!'));
