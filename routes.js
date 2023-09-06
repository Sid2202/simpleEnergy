const express = require("express");
// const formModel = require("./models");
const cors = require("cors");
const app = express();

app.use(cors())
// app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb+srv://sid:1Sidhanti@cluster0.lgah1rb.mongodb.net/dealer_management?retryWrites=true&w=majority"

app.use(express.json());

// Create a new Vehicle
app.post('/vehicles', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl, { useUnifiedTopology: true });
    const db = client.db('dealer_management'); // Change the database name as needed

    const vehicle = req.body;
    
    const result = await db.collection('vehicles').insertOne(vehicle);

    client.close();

    if (result.acknowledged) {
        console.log("New record inserted: \n" + JSON.stringify(vehicle))
        res.status(201).json(vehicle);
      } else {
        res.send('Error: No document was inserted.');
      }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new Dealer
app.post('/dealers', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl, { useUnifiedTopology: true });
    const db = client.db('dealer_management'); // Change the database name as needed

    const dealer = req.body;
    const result = await db.collection('dealers').insertOne(dealer);

    client.close();

    if (result.acknowledged) {
        console.log("New record inserted: \n" + JSON.stringify(dealer))
        res.status(201).json(dealer);
      } else {
        res.send('Error: No document was inserted.');
      }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new Sale
app.post('/sales', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl, { useUnifiedTopology: true });
    const db = client.db('dealer_management'); // Change the database name as needed

    const sale = req.body;
    const result = await db.collection('sales').insertOne(sale);

    client.close();

    if (result.acknowledged) {
        console.log("New record inserted: \n" + JSON.stringify(sale))
        res.status(201).json(sale);
      } else {
        res.send('Error: No document was inserted.');
      }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new Inventory
app.post('/inventory', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl, { useUnifiedTopology: true });
    const db = client.db('dealer_management'); // Change the database name as needed

    const inventory = req.body;
    const result = await db.collection('inventory').insertOne(inventory);

    client.close();

    if (result.acknowledged) {
        console.log("New record inserted: \n" + JSON.stringify(inventory))
        res.status(201).json(inventory);
      } else {
        res.send('Error: No document was inserted.');
      }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



module.exports = app;