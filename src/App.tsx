import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Stars, Gift, Music, Camera, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

// Image path updated
const PHOTOS = [
  { url: "/pic.jpg", caption: "Our favorite moment" },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4a373', '#faedcd', '#ccd5ae', '#e9edc6']
    });
    setTimeout(() => setShowMessage(true), 800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed-card"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="relative group cursor-pointer"
            onClick={handleOpen}
          >
            <div className="w-[300px] h-[450px] md:w-[400px] md:h-[550px] bg-white rounded-2xl shadow-2xl border border-warm-accent/20 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
              >
                <Gift size={80} className="text-warm-accent" strokeWidth={1} />
              </motion.div>
              <h1 className="font-display text-4xl md:text-5xl mb-4 text-warm-ink">A Special Delivery</h1>
              <p className="font-serif italic text-lg opacity-60">For my favorite person in the world</p>
              <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    boxShadow: [
                      "0 0 0px rgba(212, 163, 115, 0)",
                      "0 0 20px rgba(212, 163, 115, 0.3)",
                      "0 0 0px rgba(212, 163, 115, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-warm-accent/90 backdrop-blur-sm text-white px-8 py-3 rounded-2xl text-xs tracking-[0.2em] uppercase font-semibold shadow-lg border border-white/20 transition-all duration-300 hover:bg-warm-accent hover:shadow-warm-accent/40"
                >
                  Click to Open
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 opacity-20"><Stars size={24} /></div>
              <div className="absolute bottom-4 right-4 opacity-20"><Heart size={24} /></div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="open-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl w-full space-y-12 pb-24"
          >
            {/* Header Section */}
            <section className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, delay: 0.2 }}
                className="inline-block p-4 bg-warm-accent/10 rounded-full mb-4"
              >
                <Sparkles size={48} className="text-warm-accent" />
              </motion.div>
              <h1 className="font-display text-6xl md:text-8xl leading-none tracking-tighter">
                Happy Birthday, <br />
                <span className="italic text-warm-accent">Bestie!</span>
              </h1>
              <p className="font-serif text-xl md:text-2xl opacity-70 max-w-2xl mx-auto">
                Today is all about celebrating the most incredible human I know. 
                Thank you for being you.
              </p>
            </section>

            {/* Message Section */}
            <div className="flex justify-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-warm-accent/10 space-y-6 max-w-2xl w-full"
              >
                <h2 className="font-display text-3xl italic">For my Doctor</h2>
                <div className="font-serif text-lg leading-relaxed space-y-4 opacity-80">
                  <p>
                    Not enough words to tell to someone with whom you have
                    spent half of your life with. 
                  </p>
                  <p>
                    Just a simple thank you for understanding me, growing with me and being there
                    in everything. I am extremely grateful that I get to enjoy your friendship.
                    I hope today work is not too hard for you. Let's enjoy to our fullest when you and I unite.
                  </p>
                  <p>
                    May this year bring you as much joy as you bring to everyone 
                    around you. You deserve the world and more!
                  </p>
                </div>
                <div className="pt-4 border-t border-warm-accent/10">
                  <p className="font-display text-2xl">With so much love,</p>
                  <p className="font-serif italic text-xl text-warm-accent">Your Best Friend</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Heart Balloon */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 100, y: 100 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0, 
                y: 0,
              }}
              transition={{ delay: 1, duration: 1, type: "spring" }}
              className="fixed top-8 right-8 md:top-12 md:right-12 z-40 pointer-events-none md:pointer-events-auto"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [-1, 1, -1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedPhoto(0)}
              >
                {/* Balloon String */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-24 bg-warm-accent/30 origin-top -rotate-3" />
                
                {/* Heart Shape Container */}
                <div className="w-32 h-32 md:w-48 md:h-48 bg-warm-accent p-1 shadow-xl" style={{ clipPath: 'url(#heartPath)' }}>
                  <div className="w-full h-full bg-white overflow-hidden" style={{ clipPath: 'url(#heartPath)' }}>
                    <img 
                      src={PHOTOS[0].url} 
                      alt="Special memory" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                {/* Balloon Knot */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-warm-accent rotate-45" />
              </motion.div>
            </motion.div>

            {/* SVG Clip Path Definition */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="heartPath" clipPathUnits="objectBoundingBox">
                  <path d="M0.5,1 C0.5,1 0,0.7 0,0.35 C0,0.15 0.15,0 0.35,0 C0.45,0 0.5,0.05 0.5,0.1 C0.5,0.05 0.55,0 0.65,0 C0.85,0 1,0.15 1,0.35 C1,0.7 0.5,1 0.5,1" />
                </clipPath>
              </defs>
            </svg>

            {/* Footer */}
            <footer className="text-center pt-12 border-t border-warm-accent/10">
              <p className="font-serif italic text-lg opacity-40">I LOVE YOU AND I MISS YOU!</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={PHOTOS[selectedPhoto].url} 
                alt={PHOTOS[selectedPhoto].caption}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-display text-3xl italic">{PHOTOS[selectedPhoto].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
