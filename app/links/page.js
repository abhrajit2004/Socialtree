import clientPromise from "@/lib/mongodb"
import Link from "next/link";

export default async function Page() {


    const client = await clientPromise;
    const db = client.db("socialtree");
    const collection = db.collection("links");

    const docs = await collection.find().toArray();


    return (
        <div className="bg-purple-400 min-h-screen flex flex-col justify-center items-center gap-7">
            <div className="my-16">
                <div className="flex justify-center items-center gap-10 flex-wrap max-w-full mx-auto ml-[10vw] mr-[10vw] mt-24">
                    {docs.length === 0 && <h1 className="text-4xl text-white">No users found!</h1>}
                    {docs.map((doc, index) => {
                        return <Link href={`/${doc.handle}`} key={index} target="_blank"><div className="photo" >
                             <img src={doc.pic} className="rounded-full transition hover:scale-125" height={200} width={200} alt="user" />
                        </div>
                        </Link>
                    })}
                   
                </div>
            </div>

        </div>
    )
}