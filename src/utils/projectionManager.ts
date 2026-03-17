interface Slide {
  text: string;
  background: string;
}

let projectorWindow: Window | null = null;
let currentQueue: Slide[] = [];
let currentIndex: number = -1;
let isBlackout: boolean = false;
let isClear: boolean = false;

export const projectionManager = {
  setProjector: (win: Window | null) => {
    projectorWindow = win;
    // If we have a current slide, send it immediately to the new window
    if (currentIndex >= 0 && currentQueue[currentIndex]) {
      projectionManager.updateSlide(currentIndex);
    }
  },
  
  setQueue: (queue: Slide[]) => {
    currentQueue = queue;
    currentIndex = -1;
  },

  updateSlide: (index: number) => {
    if (index >= 0 && index < currentQueue.length) {
      currentIndex = index;
      const slide = currentQueue[index];
      
      if (projectorWindow) {
        projectorWindow.postMessage({
          type: 'UPDATE_SLIDE',
          payload: {
            text: slide.text,
            background: slide.background
          }
        }, '*');
      }
      
      // Update local UI
      window.dispatchEvent(new CustomEvent('takiy_slide_changed', { 
        detail: { 
          index,
          slide: {
            text: slide.text,
            background: slide.background
          }
        } 
      }));
    }
  },

  nextSlide: () => {
    if (currentIndex < currentQueue.length - 1) {
      projectionManager.updateSlide(currentIndex + 1);
    }
  },

  prevSlide: () => {
    if (currentIndex > 0) {
      projectionManager.updateSlide(currentIndex - 1);
    }
  },
  
  toggleBlackout: () => {
    isBlackout = !isBlackout;
    if (projectorWindow) {
      projectorWindow.postMessage({
        type: 'BLACKOUT',
        payload: isBlackout
      }, '*');
    }
    return isBlackout;
  },
  
  toggleClear: () => {
    isClear = !isClear;
    if (projectorWindow) {
      projectorWindow.postMessage({
        type: 'CLEAR',
        payload: isClear
      }, '*');
    }
    return isClear;
  },

  getCurrentIndex: () => currentIndex,
  isBlackoutState: () => isBlackout,
  isClearState: () => isClear
};
