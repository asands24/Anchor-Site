import { useEffect, useState } from 'react';

const sequence = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

const useKonami = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let index = 0;

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const expected = sequence[index].toLowerCase();

      if (key === expected) {
        index += 1;
        if (index === sequence.length) {
          setEnabled((prev) => !prev);
          index = 0;
        }
      } else {
        index = key === sequence[0].toLowerCase() ? 1 : 0;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return enabled;
};

export default useKonami;
