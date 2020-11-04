//importing stuff
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import Cors from 'cors'

//app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: '1092512',
    key: '2841a53a2f059ddc211e',
    secret: 'de53d130514e9d955eaf',
    cluster: 'eu',
    encrypted: true
});


//middleware
app.use(express.json())
app.use(Cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
})


//database config
const connection_url = "mongodb+srv://netninja:Asdf1123@nodeninja.afwxy.mongodb.net/whatsappDB?retryWrites=true&w=majority"

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log('DB connected')

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log('a change occured', change)

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;

            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error triggering Pusher')
        }
    })
})

//suprise


//api routes
app.get("/", (req, res) => res.status(200).send('hello world'));

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
            //200 represents everything is fine
        }
    })
})

app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
            //201 represents data created
        }
    })
})


//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))