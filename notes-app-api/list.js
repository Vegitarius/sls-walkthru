import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main(event, context) {
  const params = {
    TableName: "notes",
    //'key condition expr' defines the condition for the query
    //'userId' = :userId: only return items matching usedId partition key
    //expressionAttributeValue' defines the value in the condition
    //'userId': defines 'userId' to be Identity Pool identity id of
    //          the authenticated user
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  };

  try {
    const result = await dynamoDbLib.call("query", params);
    //return the matching list of items in resp body
    return success(result.Items);
  } catch (e) {
    return failure({ status: false });
  }
}