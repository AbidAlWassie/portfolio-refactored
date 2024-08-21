'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeController() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Ensure the component is mounted before accessing the theme to prevent SSR issues
  useEffect(() => setMounted(true), []);

  // Show a loading placeholder while the component is mounting
  if (!mounted) {
    return (
      <div className="flex items-center justify-center">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={36}
          height={36}
          sizes="36x36"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
        />
      </div>
    );
  }

  // Handle theme toggle and rendering
  return (
    <div
      className="flex items-center max-w-10 max-h-10 justify-center cursor-pointer p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="text-yellow-300" size={24} />
      ) : (
        <FiMoon className="text-gray-800 dark:text-gray-200" size={24} />
      )}
    </div>
  );
}
