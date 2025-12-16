import { NextIntlClientProvider } from "next-intl";

const LocaleLayout = (
  props: Readonly<{
    children: React.ReactNode;
  }>
) => {
  return <NextIntlClientProvider>{props.children}</NextIntlClientProvider>;
};

export default LocaleLayout;
