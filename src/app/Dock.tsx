'use client';
import React from 'react';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Dock from './components/ui/dock';

const Home = () => {
  const items = [
    {
      link: 'https://github.com',
      target: '_blank',
      Icon: <FaGithub size={22} />,
      defaultBgColor: 'bg-zinc-700',
      hoverBgColor: 'bg-zinc-700',
      tooltip: 'GitHub',
    },
    {
      link: 'https://x.com',
      target: '_blank',
      Icon: <FaTwitter size={22} />,
      defaultBgColor: 'bg-zinc-700',
      hoverBgColor: 'bg-zinc-700',
      tooltip: 'Twitter',
    },
    {
      link: 'https://instagram.com',
      target: '_blank',
      Icon: <FaInstagram size={22} />,
      defaultBgColor: 'bg-zinc-700',
      hoverBgColor: 'bg-zinc-700',
      tooltip: 'Instagram',
    },
    {
      link: 'https://discord.com/',
      target: '_blank',
      Icon: <FaDiscord size={22} />,
      defaultBgColor: 'bg-zinc-700',
      hoverBgColor: 'bg-zinc-700',
      tooltip: 'Discord',
    },
    {
      link: 'https://linkedin.com',
      target: '_blank',
      Icon: <FaLinkedin size={22} />,
      defaultBgColor: 'bg-zinc-700',
      hoverBgColor: 'bg-zinc-700',
      tooltip: 'LinkedIn',
    },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <Dock position="bottom" items={items} />
    </main>
  );
};

export default Home;
