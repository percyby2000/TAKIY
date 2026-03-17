import { projectionManager } from './projectionManager';

export const setupKeyboardControls = () => {
  window.addEventListener('keydown', (e) => {
    // If we're typing in an input or contenteditable, don't trigger global shortcuts
    const target = e.target as HTMLElement | null;
    if (!target) return;
    
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      // Allow Ctrl+Enter to save in editor (handled in Editor.astro)
      return;
    }

    // F = enviar a proyección (Optional: could handle full screen toggle)
    if (e.key === 'f' || e.key === 'F') {
      console.log('Shortcut: FS');
    }
    
    // Enter = mostrar diapositiva (handled by queue clicks usually, but can be global)
    
    // Arrows for navigation
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      projectionManager.nextSlide();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      projectionManager.prevSlide();
    }
    
    // B = Blackout
    if (e.key === 'b' || e.key === 'B') {
        projectionManager.toggleBlackout();
        // Update UI state might be needed here or via events
        window.dispatchEvent(new CustomEvent('takiy_state_toggled', { detail: { type: 'blackout' } }));
      }
      
      // C = Clear
      if (e.key === 'c' || e.key === 'C') {
          projectionManager.toggleClear();
          window.dispatchEvent(new CustomEvent('takiy_state_toggled', { detail: { type: 'clear' } }));
      }

    // Numbers 1-9 to jump to slide
    if (e.key >= '1' && e.key <= '9') {
        projectionManager.updateSlide(parseInt(e.key) - 1);
    }
  });
};
