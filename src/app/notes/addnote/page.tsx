'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function AddNote() {

	const router = useRouter();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [succes, setSucces] = useState(false);

	const createNote = async () => {
		const res = await fetch('http://127.0.0.1:8090/api/collections/todo/records', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache'
			},
			body: JSON.stringify({ title, content }),
		});
		if (!res.ok) {
			throw new Error(`HTTP ERROR: ${res.status}`);
		}
		setSucces(true);
		setTitle('');
		setContent('');
		console.log(res)
		setTimeout(() => {
			router.refresh();;
		  }, 3000);

	}
	console.log("Title: ", title);
	console.log("Content: ", content);

	return (
		<div className='bg-gray-200 rounded py-4 text-center m-12'>
		<form className="flex flex-col space-y-4"
		onSubmit={createNote}>
			{succes && <h1 className="text-green-500">Note added successfully!</h1>}
				<h1 className="font-bold">Title</h1>
				<input
					className='rounded-sm m-4 px-2 py-4'
					type="text"
					placeholder='Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<h1 className="font-bold">Content</h1>
				<textarea
				className='h-32 rounded-sm m-4 px-2 py-4'
					placeholder='Content'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			<button className="rounded bg-blue-500 transition ease-out hover:bg-cyan-200 m-4 text-white font-bold px-2 py-4" type="submit">Add Note</button>
		</form>
		</div>
	);
}
