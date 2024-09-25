//rovides the ability to emit events and register listeners for those events EventEmitter class
const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.on('messageLogged', function () {
    console.log('event registered')
})
emitter.emit('messageLogged')

// //Query strings are essential for a few reasons. 
// //They pass information to the web server, telling it what content to deliver or action to take. 
// They also pass information to other applications, improving the user experience(UX) and satisfying other business objectives. 
// They are important from a marketing perspective, too — tracking website traffic, monitoring the search terms on your website, personalizing marketing campaigns, and more. 
// What is the Difference Between Query and Path Parameters ?
//     Yep, there may be query and path parameters within the URL.Each holds a different position and performs separate functions. 
// Path Parameters
// Positioned to the left of the question mark(?)
// Can’t be omitted as it would change the URL path
// Used to identify a specific resource or page
// This URL has two different path parameters.
//     https://www.shoes.com/men-shoes/sneakers/?cgid=men-shoes-sneakers&prefn1=refinementColor&prefv1=White
// Query Parameters
// Positioned to the right of the question mark(?)
// Can be omitted since they aren’t part of the URL
// Used to sort and filter resources
//req.query
//HTTP header is a field of http request or response that passes additional context and metadata about the request and response