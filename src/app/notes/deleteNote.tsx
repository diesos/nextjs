'use client'
import { useRouter } from 'next/navigation';

export default async function deleteNote(noteId: string){
	const router = useRouter();
	const res = await fetch(`http://127.0.0.1:8090/api/collections/todo/records/${noteId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	const data = await res.json();
	if (!res.ok) {
		throw new Error('Failed to delete the note');
	}
	router.refresh();
}

module.exports = deleteNote;
