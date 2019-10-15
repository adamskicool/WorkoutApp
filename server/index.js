require('dotenv').config();
let express = require('express');
let express_graphql = require('express-graphql');
let { schema } = require('./graphQL/schema.js');
let { root } = require('./graphQL/root.js');


//Create an express server and graphQL end-point
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log("Express GraphQL server running on port 4000");
})