import { useEffect, useState } from 'react';

export const useCommandKEasterEgg = (): boolean => {
  const [activated, setActivated] = useState(false);
  const [pressCount, setPressCount] = useState(0);
  const [lastPressTime, setLastPressTime] = useState(0);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      // Check for Command+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault(); // Prevent browser's default search behavior

        const now = Date.now();
        const timeSinceLastPress = now - lastPressTime;

        // Reset if more than 2 seconds have passed
        if (timeSinceLastPress > 2000) {
          setPressCount(1);
        } else {
          const newCount = pressCount + 1;

          if (newCount === 3) {
            setActivated((prev) => !prev);
            setPressCount(0);
          } else {
            setPressCount(newCount);
          }
        }

        setLastPressTime(now);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [pressCount, lastPressTime]);

  return activated;
};
