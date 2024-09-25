const express = require('express');

const app = express();

const PORT = 6300;

const generateIndex = require('./pages/index-get.js')

app.get('/', async(req, res) =>{
   const indexHTML = await generateIndex();
   res.send(indexHTML);
})

app.use('/styles', express.static('./styles/'))
app.use('/ArticleImages', express.static('./ArticleImages/'))

app.listen(PORT, () => {
    console.log(`En écoute UWU : http://localhost:${PORT}`);
})