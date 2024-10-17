'use client';
import React, { Suspense, useState, useEffect } from 'react';
import moment from 'moment';
import deleteNote from './deleteNote';
import { SpotlightCard } from './Cards';

interface Note {
  id: string;
  title: string;
  content: string;
  created: string;
}

async function getNotes(): Promise<Note[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/api/collections/todo/records?page=1&perPage=30`, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`HTTP ERROR: ${res.status}`);
    }

    const data = await res.json();
    return data?.items.map((item: any) => ({
      id: item.id,
      title: item.title,
      content: item.content,
      created: item.created,
    })) as Note[];
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
}

function formatDate(created: string) {
  return moment(created).format('DD/MM/YYYY HH:mm:ss');
}

export default function NotesPages() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function fetchNotes() {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    }
    fetchNotes();
  }, []);

  const handleDeleteNote = async (id: string) => {
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      console.log(`Note with id ${id} deleted`);
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  return (
    <>
      <h1 className="text-center p-5 font-black text-[34px] lg:text-left">Notes</h1>
      <div className="flex flex-col gap-2 sm:flex-row flex-wrap p-4">
        <SpotlightCard
          notes={notes}
          onDelete={handleDeleteNote}
        />
      </div>
    </>
  );
}
