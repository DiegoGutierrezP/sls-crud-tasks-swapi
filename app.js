// const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
// const {
//   DynamoDBDocumentClient,
//   GetCommand,
//   PutCommand,
// } = require("@aws-sdk/lib-dynamodb");
const express = require("express");
const serverless = require("serverless-http");
const router = require("./routes");
// const routes = require("./routes");

// import express from 'express'
// import serverless from serverless;
// import routes from './routes';


const app = express();

// const USERS_TABLE = process.env.USERS_TABLE;
// const client = new DynamoDBClient();
// const dynamoDbClient = DynamoDBDocumentClient.from(client);

app.use(express.json());

app.use('/',router);

/* app.get("/users/:userId", async function (req, res) {
  // const params = {
  //   TableName: USERS_TABLE,
  //   Key: {
  //     userId: req.params.userId,
  //   },
  // };

  const {userId} = req.params;

  // try {
  //   const { Item } = await dynamoDbClient.send(new GetCommand(params));
  //   if (Item) {
  //     const { userId, name } = Item;
  //     res.json({ userId, name });
  //   } else {
  //     res
  //       .status(404)
  //       .json({ error: 'Could not find user with provided "userId"' });
  //   }
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ error: "Could not retreive user" });
  // }
  res.status(200).json({msg:'el user id es ' + userId});
});

app.get("/users", async function (req, res) {
  // const { userId, name } = req.body;
  // if (typeof userId !== "string") {
  //   res.status(400).json({ error: '"userId" must be a string' });
  // } else if (typeof name !== "string") {
  //   res.status(400).json({ error: '"name" must be a string' });
  // }

  // const params = {
  //   TableName: USERS_TABLE,
  //   Item: {
  //     userId: userId,
  //     name: name,
  //   },
  // };

  // try {
  //   await dynamoDbClient.send(new PutCommand(params));
  //   res.json({ userId, name });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ error: "Could not create user" });
  // }
  res.status(200).json({msg:'todos los usuaris'});
}); */

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.use((err, req, res) => {
  res.status(err.status || 500).send();
});



module.exports.handler = serverless(app);
// export default handler = serverless(app);

/* 

import express from 'express';
import serverless from 'serverless-http';

import routes from './routes';

const app = express();

app.use(express.json());

app.use('/', routes);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).send();
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).send();
});

export const handler = serverless(app);

*/
