"use client";

import React from 'react'
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const page = () => {

    // const [link, setLink] = useState("")
    // const [linktext, setLinktext] = useState("")
    const searchParams = useSearchParams();
    const [links, setLinks] = useState([{ link: "", linktext: "" }]);
    const [handle, setHandle] = useState(searchParams.get('handle'))
    const [pic, setPic] = useState("")
    const [desc, setDesc] = useState("")
    const ref = useRef();

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }

    const submitLinks = () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/add", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    toast.success(result.message);
                    ref.current.classList.remove('hidden');
                    setLinks([{ link: "", linktext: "" }]);
                    setPic("");
                    setDesc("");
                }
                else {
                    toast.error(result.message);
                }
            })
            .catch((error) => console.error(error));
    }

    const goToSt = () => {
        window.open(`/${handle}`, '_blank');
    }

    return (
        <>
            <ToastContainer />
            <div>
                <div className='bg-[#e9c0e9] min-h-screen grid grid-cols-2'>
                    <div className="col1 flex flex-col justify-center items-center text-gray-900 mt-32">
                        <div className='flex flex-col gap-5 my-8'>
                            <h1 className='font-bold text-4xl'>Create your Socialtree</h1>
                            <div className="item">

                                <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                                <div className="mx-4">
                                    <input onChange={(e) => setHandle(e.target.value)} value={handle} className='px-4 py-2 my-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Choose a Handle' />
                                </div>
                            </div>

                            <div className="item">

                                <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>

                                {links && links.map((item, index) => {
                                    return <div className="mx-4" key={index}>
                                        <input onChange={(e) => handleChange(index, item.link, e.target.value)} value={item.linktext} className='px-4 py-2 focus:outline-pink-500 mx-2 my-2 rounded-full' type="text" placeholder='Enter link text' />
                                        <input onChange={(e) => handleChange(index, e.target.value, item.linktext)} value={item.link} className='px-4 py-2 focus:outline-pink-500 mx-2 my-2 rounded-full' type="text" placeholder='Enter link' />
                                    </div>
                                })}
                                <button onClick={() => addLink()} className='px-4 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl'>+ Add Link</button>

                            </div>

                            <div className="item">
                                <h2 className='font-semibold text-2xl'>Step 3: Add Picture and Description</h2>

                                <div className="mx-4 flex flex-col">
                                    <input value={pic} onChange={(e) => setPic(e.target.value)} className='px-4 py-2 focus:outline-pink-500 mx-2 my-2 rounded-full' type="text" placeholder='Enter link to your Picture' />
                                    <input value={desc} onChange={(e) => setDesc(e.target.value)} className='px-4 py-2 focus:outline-pink-500 mx-2 my-2 rounded-full' type="text" placeholder='Enter description' />
                                </div>
                            </div>
                            <div className='buttons flex items-center gap-2'>
                                <button disabled={pic == '' || handle == '' || links[0].linktext == ''} onClick={() => submitLinks()} className='disabled:bg-slate-500 px-4 py-2 w-fit mx-2 bg-slate-900 text-white font-bold rounded-3xl'>Create Your SocialLink</button>
                                <button onClick={()=>goToSt()} ref={ref} className='bg-green-600 text-white px-4 py-2 rounded-3xl hidden'>Visit your Linktree!</button>
                            </div>

                        </div>
                    </div>
                    <div className="col2 w-full h-screen bg-[#e9c0e9]">
                        <img className='h-full object-cover w-full' src="/generate.png" alt="Generate your links" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
