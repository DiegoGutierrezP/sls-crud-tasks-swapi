
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
  UpdateCommand
} = require("@aws-sdk/lib-dynamodb");
const { Router } = require("express");   
const { v4: uuidv4 } = require('uuid');

const router = Router();

const TABLE_NAME = process.env.TASKS_TABLE;
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);

router.get("/", async function (req, res) {

  const {Items} = await dynamoDbClient.send(
    new ScanCommand({ TableName: TABLE_NAME })
  );

  res.status(200).json({data:Items});
});

router.get("/:id", async function (req, res) {

  const {id = ''} = req.params;

  const {Item} = await dynamoDbClient.send(
    new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        id,
      },
    })
  );

  if(!Item) return res.status(404).json({msg:'Task not found'});

  res.status(200).json({data:Item});
});

router.post("/", async function (req, res) {
    const { description = '', completed = false } = req.body;

    if(!description.trim()){
      return res.status(400).json({msg:'The field description id required'})
    }

    const taskCreated = await dynamoDbClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: {
          id: uuidv4(),
          description,
          completed,
        },
      })
    );

    res.status(201).json({msg:'task created',data:taskCreated });
});

router.put("/:id", async function (req, res) {
  const {id = ''} = req.params;
  const { description = '', completed = false } = req.body;

  const taskUpdated = await dynamoDbClient.send(
    new UpdateCommand({
      TableName: TABLE_NAME,
      Key: {
        id, 
      },
      UpdateExpression: "SET description = :valor1, completed = :valor2", 
      ExpressionAttributeValues: {
        ":valor1": description,
        ":valor2":completed,
      },
    })
  );

  res.status(200).json({msg:'update task ',data:taskUpdated});
});


module.exports = router;
// export default router;
