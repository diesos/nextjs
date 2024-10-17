import React from 'react';
import styles from '../Notes.module.css'
import { SoloCard } from '../Cards';

async function getNote(noteId: string) {
	try{
		console.log(noteId)
		const res = await fetch(`http://127.0.0.1:8090/api/collections/todo/records/${noteId}`,
			{
				headers: {
					'Content-Type': 'application/json',
					'Cache-Control': 'no-cache'},
				next:  { revalidate: 10 },
			})
		  console.log(res)
		const data = await res.json()
		console.log("Data from API:", data);
		return data;
	}
	catch(error){
		console.error("Error fetching note:", error);
		return {};
	}
}

export default async function NotePage({ params }: any) {
	const note = await getNote(params.id);
	const { id, title, content, created } = note || {};

	return (
	  <div>
		<SoloCard
			key={id}
			note={note}
		/>

		<h1 className={styles.pageTitle}>notes/{id}</h1>
		<div className={styles.note}>
		  <h3 className={styles.title}>{title}</h3>
		  <h5 className={styles.content}>{content}</h5>
		  <p className={styles.created}>{created}</p>
		</div>
	  </div>
	);
  }
