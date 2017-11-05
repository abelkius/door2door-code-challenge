const {client} = require('./DynamoDB');

const params = {
  KeySchema: [{AttributeName: 'id', KeyType: 'HASH'}],
  AttributeDefinitions: [{AttributeName: 'id', AttributeType: 'S'}],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
};

client.createTable(params, (err, data) => {
  if (err) {
    console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.info('Created table. Table description JSON:', JSON.stringify(data, null, 2));
  }
});
