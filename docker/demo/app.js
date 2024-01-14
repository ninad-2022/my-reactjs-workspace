const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    return res.json({ messgae: "Hey! I am a nodejs container" })
})

app.listen(port, () => {
    console.log(`port is running on ${port}`);
});
