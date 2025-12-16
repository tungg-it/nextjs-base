"use client";

import { createContext, useContext } from "react";
import { AppConfig } from "@/utils/app-config";
import type { LocaleCode, ThemeMode } from "@/types/common";

export interface AppContextValue {
  appName: string;
  locale: LocaleCode;
  theme: ThemeMode;
}

const AppContext = createContext<AppContextValue | undefined>(
  undefined
);

interface AppProviderProps {
  children: React.ReactNode;
  locale: LocaleCode;
  theme: ThemeMode;
}

export const AppProvider = ({
  children,
  locale,
  theme,
}: AppProviderProps) => {
  const value: AppContextValue = {
    appName: AppConfig.name,
    locale,
    theme,
  };

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);

  if (!ctx) {
    throw new Error("useAppContext must be used within <AppProvider>");
  }

  return ctx;
};


