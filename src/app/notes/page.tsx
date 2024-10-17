'use client';
import React, { Suspense } from 'react';
import moment from 'moment';
import deleteNote from './deleteNote';
import { useState, useEffect } from 'react';
import { SpotlightCard } from './Cards';



async function getNotes() {
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

    const data: { items: unknown[] } = await res.json();
    console.log('Data from API:', data);
    return data?.items as unknown[];
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
}

function formatDate(created) {
  return moment(created).format('DD/MM/YYYY HH:mm:ss');
}

export default function NotesPages() {
  const [notes, setNotes] = useState<unknown[]>([]);

  useEffect(() => {
    async function fetchNotes() {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    }
    fetchNotes();
  }, []);

  const handleDeleteNote = async (id) => {
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
