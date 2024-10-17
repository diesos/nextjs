"use client";
import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import moment from "moment";
import { FaRegClock } from "react-icons/fa";

interface CardData {
  id: string;
  title: string;
  content: string;
  created: string;
  notes?: object[];
}

interface SingleCardProps {
  note: CardData;
  onDelete?: (id: string) => void;
}

interface SpotlightCardProps {
  notes: CardData[];
  onDelete?: (id: string) => void;
}

const SpotlightItem: React.FC<CardData> = ({ notes, onDelete }) => {
  const { id , title, content, created } = notes;
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  function formatDate(created) {
    return moment(created).format("DD/MM/YYYY HH:mm");
  }

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
      {onDelete && (
        <TiDeleteOutline
          className="absolute top-4 right-4 text-neutral-100 text-2xl cursor-pointer"
          onClick={() => onDelete(id)}
        />
      )}
      <h3 className="mb-2 font-medium text-neutral-100 uppercase">{title}</h3>
      <Link href={`/notes/${id}`}>
        <p className="text-sm text-neutral-400 mb-12 mt-12 font-bold text-xl">
          {content}
        </p>
        <div className="text-sm text-neutral-400 mt-4 font-mono mb-[-1em] text-right">
          <FaRegClock className="text-sm text-neutral-400 mt-4 font-mono mb-[-1em] m-24" />{" "}
          {formatDate(created)}
        </div>
      </Link>
    </div>
  );
};

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  notes,
  onDelete,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {notes.length > 0 ? (
        notes.map((note) => (
          <SpotlightItem key={note.id} notes={note} onDelete={onDelete} />
        ))
      ) : (
        <p>No cards available or loading...</p>
      )}
    </div>
  );
};

export const SoloCard: React.FC<SingleCardProps> = ({ note, onDelete }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <SpotlightItem notes={note} onDelete={onDelete} />
    </div>
  );
};
