const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json({ hi: "Hello" })
})

app.listen(8000);
