const express = require('express');
const colors = require('colors');
const cors = require('cors'); // ✅ Import cors
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

// ✅ Enable CORS before routes
app.use(cors());

// Connect to MongoDB
connectDB();

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

// Start server
app.listen(port, () =>
  console.log(`Server is running on port ${port}`.yellow.bold)
);
