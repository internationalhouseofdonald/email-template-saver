// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const leads = await db.collection("leads").find({}).toArray();
  console.log(leads);
  res.statusCode = 200;
  res.json({ name: "Jon Doe", leads });
};
