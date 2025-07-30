const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.json({ hi: "Hello" })
})

app.listen(8000);
