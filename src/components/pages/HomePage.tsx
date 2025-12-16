"use client";

import { LocaleSwitcher, ThemeSwitcher } from "@/components/ui";
import { PageContainer } from "@/components/shared";
import { useTranslations } from "next-intl";

export const HomePage = () => {
  const t = useTranslations("HomePage");

  return (
    <PageContainer
      title={t("title")}
      actions={
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      }
    >
      <p className="text-sm text-foreground">{t("description", {})}</p>
    </PageContainer>
  );
};
