import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play } from 'lucide-react';

const videoId = 's7CvoBJuXeU';
const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

/** One persistent player: scrolling between sections never restarts the song. */
export function WeddingMusic() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    function receive(event: MessageEvent) {
      if (event.origin !== 'https://www.youtube.com' || event.source !== frame.current?.contentWindow) return;
      let message;
      try { message = typeof event.data === 'string' ? JSON.parse(event.data) : event.data; }
      catch { return; }
      if (message?.event === 'onStateChange') setPlaying(message.info === 1);
      if (message?.event === 'infoDelivery' && typeof message.info?.playerState === 'number') {
        setPlaying(message.info.playerState === 1);
      }
      if (message?.event === 'onError') { setFailed(true); setPlaying(false); }
    }
    window.addEventListener('message', receive);
    return () => window.removeEventListener('message', receive);
  }, []);

  function send(func: string, args: unknown[] = []) {
    frame.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args }), 'https://www.youtube.com');
  }

  function toggle() {
    if (!started) { setStarted(true); return; }
    send(playing ? 'pauseVideo' : 'playVideo');
  }

  return (
    <div className="mt-7 flex flex-col items-center gap-3">
      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-gold/70">
        <Music2 size={13} aria-hidden="true" /> A soundtrack to our beginning
      </span>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause wedding music' : 'Play wedding music'}
        aria-pressed={playing}
        className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-gold/50 bg-gold/10 px-7 py-3 text-sm text-gold transition hover:bg-gold/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold cursor-pointer"
      >
        {playing ? <Pause size={17} fill="currentColor" aria-hidden="true" /> : <Play size={17} fill="currentColor" aria-hidden="true" />}
        {playing ? 'Pause music' : 'Play music'}
      </button>
      <p className="text-xs text-gold/60" aria-live="polite">
        {playing ? 'Enjoy our song as you explore our story.' : 'Press play and share this moment with us.'}
      </p>
      {started && (
        <div className="w-full max-w-[360px] overflow-hidden rounded-xl border border-gold/30 bg-black shadow-lg">
          <iframe
            ref={frame}
            title="Wedding music on YouTube"
            width="360"
            height="203"
            className="block h-[203px] w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&playsinline=1&loop=1&playlist=${videoId}&origin=${encodeURIComponent(window.location.origin)}`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={() => {
              frame.current?.contentWindow?.postMessage(JSON.stringify({ event: 'listening', id: 'wedding-music' }), 'https://www.youtube.com');
              send('addEventListener', ['onStateChange']);
              send('addEventListener', ['onError']);
            }}
          />
        </div>
      )}
      {started && (
        <p className="max-w-xs text-xs text-gold/60">
          {failed ? 'This song cannot play here. ' : 'If playback does not start, tap play in the video or '}
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gold">listen on YouTube</a>.
        </p>
      )}
    </div>
  );
}
