'use client'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import ShimmerButton from '../../components/ui/Button';


export default function AddNote() {

	const router = useRouter();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [succes, setSucces] = useState(true);

	const createNote = async (e) => {
		e.preventDefault();
		const res = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/api/collections/todo/records`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache'
			},
			body: JSON.stringify({ title, content }),
		});
		if (!res.ok) {
			throw new Error(`HTTP ERROR: ${res.status}`);
			setSucces(false);
		}
		setSucces(true);
		router.push('/notes');
		toast.success('Note added successfully!',
			{
				duration: 2000,
				className: 'font-bold'
			}
		);
		setTitle('');
		setContent('');
		console.log(res)

	}
	console.log("Title: ", title);
	console.log("Content: ", content);

	return (
		<div className='border-black max-sm:w-[80%] m-auto border-2 rounded-lg py-4 text-center px-6 mt-24 w-6/12 '>
		<form className="flex flex-col space-y-4"
		onSubmit={createNote}>
			{!succes && <p className="text-red-500">Failed to add note</p>}
				<h1 className="font-bold">Title</h1>
				<input
					className=' m-4 px-2 py-4 border-2 border-gray-400 rounded-lg'
					type="text"
					placeholder='Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<h1 className="font-bold">Content</h1>
				<textarea
				className='m-4 px-2 py-4 border-2 border-gray-400 rounded-lg h-32'
					placeholder='Content'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			<ShimmerButton
			type="submit"
			text="Add"
			/>
			{/* <button className="rounded bg-blue-500 transition ease-out hover:bg-cyan-200 m-4 text-white font-bold px-2 py-4" type="submit">Add Note</button> */}
		</form>
		</div>
	);
}
