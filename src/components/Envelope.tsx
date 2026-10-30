import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { couple } from '../data/weddingData';

interface EnvelopeProps { onOpen: () => void; }

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className="envelope-screen" exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.5 }}>
      <div className="envelope-frame" aria-hidden="true" />
      <div className="envelope-lantern envelope-lantern-left" aria-hidden="true"><img src="/assets/chinese-vectors/lantern-openclipart.svg" alt="" /></div>
      <div className="envelope-lantern envelope-lantern-right" aria-hidden="true"><img src="/assets/chinese-vectors/lantern-openclipart.svg" alt="" /></div>
      <img className="envelope-cloud envelope-cloud-left" src="/assets/chinese-vectors/cloud-pattern.svg" alt="" aria-hidden="true" />
      <img className="envelope-cloud envelope-cloud-right" src="/assets/chinese-vectors/cloud-pattern.svg" alt="" aria-hidden="true" />
      <motion.div className="envelope-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.8 }}>
        <p className="envelope-eyebrow">A celebration of love <span aria-hidden="true">·</span> 囍</p>
        <h1>Ikaw ay<br /><em>Inaanyayahan</em></h1>
        <p className="envelope-subtitle">Isang liham, isang bagong simula.</p>
        <div className={`envelope-stage${isOpening ? ' is-opening' : ''}`}>
          <div className="envelope-fan envelope-fan-left" aria-hidden="true" />
          <div className="envelope-fan envelope-fan-right" aria-hidden="true" />
          <motion.button type="button" className="letter-envelope" aria-label="Buksan ang liham — wedding invitation" disabled={isOpening} onClick={() => setIsOpening(true)} initial={{ rotate: -5 }} animate={{ rotate: isOpening ? 0 : -5, y: isOpening ? 30 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.6 }}>
            <span className="envelope-back" />
            <motion.span className="envelope-letter" animate={isOpening ? { y: '-66%', opacity: 1 } : { y: 0, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }} onAnimationComplete={() => { if (isOpening) onOpen(); }}>
              <span className="letter-symbol" aria-hidden="true">囍</span>
              <span className="letter-kicker">Together with our families</span>
              <span className="letter-names">{couple.bride.split(' ')[0]} <i>&</i> {couple.groom.split(' ')[0]}</span>
              <span className="letter-date">{couple.date}</span>
            </motion.span>
            <span className="envelope-fold envelope-fold-left" />
            <span className="envelope-fold envelope-fold-right" />
            <span className="envelope-fold envelope-fold-bottom" />
            <motion.span className="envelope-flap" animate={{ rotateX: isOpening ? 180 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.25, ease: 'easeInOut' }}><span /></motion.span>
            <motion.span className="envelope-seal" animate={isOpening ? { scale: 1.15, y: 20, opacity: 0 } : { scale: 1, y: 0, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.3 }} aria-hidden="true"><span>囍</span></motion.span>
            <span className="envelope-inscription" aria-hidden="true">百年好合 <span>FOREVER & ALWAYS</span></span>
          </motion.button>
        </div>
        <button className="envelope-open-button" type="button" onClick={() => setIsOpening(true)} disabled={isOpening}>{isOpening ? 'Binubuksan ang liham…' : 'Buksan ang liham'}<span aria-hidden="true">✧</span></button>
        <p className="envelope-hint" role="status">{isOpening ? 'Ang inyong paanyaya' : 'Isang espesyal na paanyaya para sa iyo'}</p>
      </motion.div>
      <p className="envelope-footer">WITH LOVE <span aria-hidden="true">◆</span> {couple.bride.split(' ')[0]} & {couple.groom.split(' ')[0]}</p>
    </motion.div>
  );
}
