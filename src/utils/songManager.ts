interface Slide {
  text: string;
}

interface Song {
  id?: string;
  title: string;
  author: string;
  category: string;
  slides: Slide[];
  background: string;
}

interface QueueItem extends Slide {
  queueId: number;
}

// Local Storage Keys
const SONGS_KEY = 'takiy_songs';
const QUEUE_KEY = 'takiy_queue';

export const songManager = {
  getSongs: (): Song[] => {
    const songs = localStorage.getItem(SONGS_KEY);
    if (!songs) {
      const defaultSongs: Song[] = [
        {
          id: '1',
          title: 'Sublime Gracia',
          author: 'John Newton',
          category: 'Himno',
          slides: [
            { text: 'Sublime gracia del Señor,<br/>Que a un infeliz salvó' },
            { text: 'Yo ciego fui, mas hoy veo yo,<br/>Perdido y Él me halló' },
            { text: 'Su gracia me enseñó a temer,<br/>Mis dudas ahuyentó' },
            { text: '¡Oh, cuán preciosa fue a mi ser,<br/>Cuando Él me transformó!' }
          ],
          background: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
        },
        {
            id: '2',
            title: 'A sus Pies',
            author: 'Miel San Marcos',
            category: 'Adoración',
            slides: [
              { text: 'A sus pies, mi vida entregué' },
              { text: 'En su luz, mi carga dejó' }
            ],
            background: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
        }
      ];
      localStorage.setItem(SONGS_KEY, JSON.stringify(defaultSongs));
      return defaultSongs;
    }
    return JSON.parse(songs);
  },
  
  saveSong: (song: Song) => {
    const songs = songManager.getSongs();
    const index = songs.findIndex(s => s.id === song.id);
    if (index > -1) {
      songs[index] = song;
    } else {
      songs.push({ ...song, id: Date.now().toString() });
    }
    localStorage.setItem(SONGS_KEY, JSON.stringify(songs));
    window.dispatchEvent(new CustomEvent('takiy_songs_updated'));
  },

  deleteSong: (id: string) => {
    const songs = songManager.getSongs().filter(s => s.id !== id);
    localStorage.setItem(SONGS_KEY, JSON.stringify(songs));
    window.dispatchEvent(new CustomEvent('takiy_songs_updated'));
  },

  getQueue: (): QueueItem[] => {
    const queue = localStorage.getItem(QUEUE_KEY);
    return queue ? JSON.parse(queue) : [];
  },

  addToQueue: (slides: Slide[]) => {
    const queue: QueueItem[] = slides.map((s, i) => ({ ...s, queueId: Date.now() + i }));
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    window.dispatchEvent(new CustomEvent('takiy_queue_updated'));
  },

  clearQueue: () => {
    localStorage.setItem(QUEUE_KEY, JSON.stringify([]));
    window.dispatchEvent(new CustomEvent('takiy_queue_updated'));
  }
};
