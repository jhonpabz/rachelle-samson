import { useRef, useState, type CSSProperties } from 'react';
import { Pause, Play, Repeat, RotateCcw } from 'lucide-react';

const musicUrl = `${import.meta.env.BASE_URL}assets/music/Illegal Medley (Piano Violin Duet) - Andy Morris.mp3`;

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [repeat, setRepeat] = useState(true);
  const [error, setError] = useState('');

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    setError('');
    try {
      await audio.play();
    } catch {
      setError('Music could not play. Please try again.');
    }
  }

  return (
    <div className="mx-auto mt-7 max-w-sm text-gold/90">
      <audio
        ref={audioRef}
        src={musicUrl}
        preload="none"
        loop={repeat}
        onPlaying={() => {
          setPlaying(true);
          setHasPlayed(true);
        }}
        onPause={() => setPlaying(false)}
        onWaiting={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setError('Music could not load. Please try again.');
        }}
      />
      <div className="music-waveform" data-playing={playing} aria-hidden="true">
        {Array.from({ length: 31 }, (_, index) => (
          <span
            key={index}
            style={{
              '--bar-height': `${18 + ((index * 37) % 65)}px`,
              '--bar-duration': `${0.65 + (index % 7) * 0.13}s`,
              '--bar-delay': `${-index * 0.19}s`,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-8">
        <button
          type="button"
          className="music-control"
          aria-label="Restart music"
          onClick={() => { if (audioRef.current) audioRef.current.currentTime = 0; }}
        >
          <RotateCcw size={21} aria-hidden="true" />
        </button>
        <button
          type="button"
          className={`music-control music-play-button h-14! w-14!${hasPlayed ? '' : ' music-play-invite'}`}
          aria-label={playing ? 'Pause music' : 'Play music'}
          onClick={togglePlayback}
        >
          {!hasPlayed && <span className="music-play-hint" aria-hidden="true">Tap to play <span>↓</span></span>}
          {playing ? <Pause size={32} fill="currentColor" aria-hidden="true" /> : <Play size={32} fill="currentColor" aria-hidden="true" />}
        </button>
        <button
          type="button"
          className="music-control relative"
          aria-label="Repeat music"
          aria-pressed={repeat}
          onClick={() => setRepeat(!repeat)}
        >
          <Repeat size={22} aria-hidden="true" />
          {repeat && <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-current" />}
        </button>
      </div>
      <p className="mt-3 text-sm italic leading-relaxed text-gold/70">
        Click to play our music and set the tone for our special day
      </p>
      {error && <p role="alert" className="mt-2 text-sm text-gold">{error}</p>}
    </div>
  );
}
