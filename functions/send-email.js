import serverless from "serverless-http"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const functionName = 'send-email'
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}`
//
// app.get(routerBasePath, (req, res) => {
//   console.log('success');
//   res.json({ msg: 'test' })
// });

exports.handler = (event, context, callback) => {
  console.log('success', event);

  callback(null, {
    statusCode: 200,
    body: event.body
  })
}
