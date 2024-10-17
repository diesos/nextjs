'use client'
import React, { useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { TiDeleteOutline } from "react-icons/ti";


interface CardData {
  title: string;
  content: string;
  created: string;
  notes?: object[];
}

interface SpotlightCardProps {
  cards: CardData[];
  onDelete?: (id: string) => void;
}

const SpotlightItem: React.FC<CardData> = ({ note, onDelete }) => {
	const { id, title, content, created } = note || {};
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => controls.start({ opacity: 1 });
  const handleMouseLeave = () => controls.start({ opacity: 0 });

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-80 rounded-3xl border border-neutral-800 bg-neutral-950 p-8`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl"
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.25), transparent 40%)`,
        }}
      />
      <div className="mb-4">
	  {onDelete && <TiDeleteOutline className='font-white' onClick={() => onDelete(id)} />}
      </div>
      <h3 className="mb-2 font-medium text-neutral-100">
        {title}
      </h3>
      <Link href={`/notes/${id}`}>
      <p className="text-sm text-neutral-400">
        {content}
      </p>
      <p className="text-sm text-neutral-400">
        {created}
      </p>
      </Link>
    </div>
  );
};

export const  SpotlightCard: React.FC<SpotlightCardProps> = ({ notes, onDelete }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {notes.length > 0 ? (
        notes.map((note) => (
          <SpotlightItem
            key={note.id}
            note={note}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No cards available</p>
      )}
    </div>
  );
};


export const  SoloCard: React.FC<SpotlightCardProps> = ({ notes }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
          <SpotlightItem
            key={notes.id || 0}
            notes={notes}
          />
    </div>
  );
};


