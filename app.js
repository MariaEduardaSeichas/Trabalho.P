const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Meu Nome")
    res.send('Meu Nome é Maria Eduarda')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
