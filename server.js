// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC6c30a16cf8cb7b5ec9c7414650dbe051';
const authToken = 'f81639439de61b8198d119a307923e86';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hello from Nodejs!',
         to: 'whatsapp:+917042989596'
       })
      .then(message => console.log(message))
      .catch(err => console.log(err));
