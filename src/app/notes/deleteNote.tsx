import toast from "react-hot-toast";

export default async function deleteNote(noteId: string){
	const res = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}api/collections/todo/records/${noteId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	toast.success('Note deleted successfully!',
		{
			duration: 5000,
			className: 'font-bold'
		});
	if (!res.ok) {
		throw new Error('Failed to delete the note');
	}
}
