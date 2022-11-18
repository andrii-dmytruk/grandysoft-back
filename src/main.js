const express = require('express');

const PORT = process.env.PORT || 5000;


const app = express();


app.get('/test', (req, res) => {
  res.send('OK');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
