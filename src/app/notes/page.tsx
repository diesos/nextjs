'use client'
import Link from 'next/link';
import styles from './Notes.module.css';
import moment from 'moment';
import deleteNote from './deleteNote';

async function getNotes() {

	try {
		const res = await fetch('http://127.0.0.1:8090/api/collections/todo/records?page=1&perPage=30', {
			headers: {
			  'Content-Type': 'application/json',
			  'Cache-Control': 'no-cache'
			},
			cache: 'no-store',
		  });
		if (!res.ok) {
			throw new Error(`HTTP ERROR: ${res.status}`);
		}

		const data = await res.json();
		console.log("Data from API:", data);
		return data?.items as unknown[];
	} catch (error) {
		console.error("Error fetching notes:", error);
		return [];
	}
}


console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

export default async function NotesPages() {
	const notes = await getNotes()

	console.log(notes);

  return (
	<>
	<h1 className={styles.pageTitle}>Notes</h1>
	<div className="flex flex-col gap-2 sm:flex-row flex-wrap">

		{notes?.map((note) => {
		return <Note key={note.id} note={note} />;
		})}
	</div>
	</>
  )
}
function formatDate(created) {
	return moment(created).format('DD/MM/YYYY HH:mm:ss');
  }

function Note({ note }: any) {
	const { id, title, content, created } = note || {};

	return (


		<div className={styles.note}>
			<div className='flex justify-between'>
		  <p className={styles.title} className="m-4">{title ? title : "No title"}</p>
		  <button className="font-sans" onClick={() => deleteNote(id)}>[ X ]</button>

		  </div>
		  <Link href={`/notes/${id}`}>

		  <hr className="border-black rounded m-4 mt-[-1rem]" />
		  <h5 className={styles.content} className="m-4">{content ? content : "No content"}</h5>
		  <p className={styles.created}>{formatDate(created)}</p>
		  </Link>
		</div>

	);
  }

