import * as express from 'express';
import * as bodyParser from "body-parser";
import {myRouter} from "./router";
import * as initializeApp from "firebase/app"

const firebaseApp = initializeApp();
const app = express();


app.use(bodyParser.json({limit: '50mb', type: "application/vnd.api+json"}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use("/todo", myRouter)

app.listen(3000, () => {
    console.log("Server On")
})


//app.use(bodyParser.json({}))

