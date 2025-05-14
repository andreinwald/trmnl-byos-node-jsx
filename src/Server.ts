import {renderApp} from "./Utils/RenderApp.js";
import App from "./Components/App.js";
import express from "express";

const app = express();

app.get('/preview', async (req, res) => {
    const image = await renderApp(App());
    res.setHeader('Content-Type', 'image/png');
    res.send(image);
})

const port = 3000;
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})