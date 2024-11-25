import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {

    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("socialtree");
    const collection = db.collection("links");

    const doc = await collection.findOne({ handle });

    if(!doc){
        return notFound();
    }

    return <div className="flex min-h-screen bg-[#eeede9] justify-center items-start py-10">
        <div className="photo flex flex-col justify-center items-center gap-4">
            <img className="rounded-full" height={100} width={100} src={doc.pic} alt="" />
            <span className="font-bold text-xl">@{handle}</span>
            <span className="desc w-80 text-center">{doc.desc}</span>
            <div className="links">
                {doc.links.map((item, index) => {
                    return <Link href={item.link} target="_blank" key={index}><div className="flex py-4 px-2 bg-white min-w-96 justify-center rounded-md my-3 shadow-lg transform hover:scale-110 transition">
                        {item.linktext}
                    </div>
                    </Link>
                })
                }  
            </div>
        </div>
    </div>
}