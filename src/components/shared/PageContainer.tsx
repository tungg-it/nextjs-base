import type { PropsWithChildren, ReactNode } from "react";

interface PageContainerProps extends PropsWithChildren {
  title?: ReactNode;
  actions?: ReactNode;
}

export const PageContainer = ({
  title,
  actions,
  children,
}: PageContainerProps) => {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 px-4 py-8">
      {(title || actions) && (
        <header className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
          {title && (
            <h1 className="text-xl font-semibold leading-tight">{title}</h1>
          )}
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </header>
      )}
      <section className="flex-1">{children}</section>
    </main>
  );
};
