import serverless from "serverless-http"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mailer from "../misc/mailer"

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
  const { from, to, subject, replyTo, html } = JSON.parse(event.body);
  mailer.sendMail({ from, to, subject, replyTo, html }, (error, info) => {
    if (error) {
      console.log(error);
      callback(null, {
        statusCode: 404
      });
    }
    else {
      callback(null, {
        statusCode: 200,
        body: 'Nous avons bien reçu votre demande. Nous vous contacterons dans les plus bref délais'
      });
    }
  });
}
