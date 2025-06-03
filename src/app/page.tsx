'use client';
import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ComingSoonPage: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-950 via-black to-purple-900 text-white relative overflow-hidden px-4">
      {/* Glowing background orbs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-ping left-20 top-1/4 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-10 animate-ping right-10 bottom-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-screen-xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image
            src="/polycircle.svg"
            alt="PolyCircle Logo"
            width={220}
            height={200}
            priority
            className="mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </motion.div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-extrabold leading-tight tracking-tight mb-6 whitespace-nowrap drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
        >
          We’re working hard to bring you something amazing. Stay tuned for the big launch!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-8 mt-8"
        >
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-purple-400 transition transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-purple-400 transition transform hover:scale-110"
          >
            <FaDiscord />
          </a>
          <a
            href="https://t.me/PolyCircle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-purple-400 transition transform hover:scale-110"
          >
            <FaTelegramPlane />
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default ComingSoonPage;
