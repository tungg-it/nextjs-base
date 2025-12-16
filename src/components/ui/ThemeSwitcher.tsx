"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, type ChangeEventHandler } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTheme(event.target.value);
  };

  return (
    <select
      value={theme}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-hidden focus-visible:ring-3"
      aria-label="theme-switcher"
    >
      <option value="light">LIGHT</option>
      <option value="dark">DARK</option>
      <option value="system">SYSTEM</option>
    </select>
  );
};
