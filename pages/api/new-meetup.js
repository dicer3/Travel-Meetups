import { MongoClient } from "mongodb";

// /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://pragun:pragun@devconnector.avyq7.mongodb.net/meetups_db"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log("result...", result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted !!" });
  }
};

export default handler;
