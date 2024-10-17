"use client";
import React, { useState, useEffect } from "react";
import { SoloCard } from "../Cards";
import deleteNote from "../deleteNote";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

async function getNote(noteId: string) {
  try {
    console.log(noteId);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DB_HOST}/api/collections/todo/records/${noteId}`,
      {
        headers: {
          method: "GET",
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        next: { revalidate: 10 },
      }
    );

    console.log(res);
    const data = await res.json();
    console.log("Data from API:", data);
    console.log("Note id:", noteId);
    return data;
  } catch (error) {
    console.error("Error fetching note:", error);
    return {};
  }
}

export default function NotePage({ params }: any) {
  const router = useRouter();
  const [note, setNote] = useState<any>({});
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    async function fetchNote() {
      const fetchedNote = await getNote(params.id);
      setNote(fetchedNote);
    }

    fetchNote();
  }, [params.id]);

  const { id, title, content, created } = note || {};
  console.log("Object?", note);
  console.log(id);

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setSuccess(true);
      router.push("/notes");
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Note</h1>
      <hr className="my-4" />
      <SoloCard note={note} onDelete={handleDeleteNote} />
    </div>
  );
}
