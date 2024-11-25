import clientPromise from "@/lib/mongodb";

export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("socialtree");
    const collection = db.collection("links");

    const doc = await collection.findOne({ handle: body.handle });

    if(doc){
        return Response.json({ success: false, error: true, message: 'This Socialtree already exists!' })
    }

    const result = await collection.insertOne(body);

    return Response.json({ success: true, error: false, message: 'Your Socialtree has been generated!', result: result })
}