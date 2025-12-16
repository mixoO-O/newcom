import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

export const metadata = {
  title: "Newcom - Deporte y Vida Activa",
  description:
    "Descubre el Newcom, un deporte adaptado para adultos mayores que fomenta la actividad física, la integración social y el bienestar.",
  metadataBase: new URL("https://newcom-talca.vercel.app"), // Replace with actual domain if known, or localhost for now, but best mostly for OG images resolution
  openGraph: {
    images: "/assets/logo.png",
  },
  // icons field removed to use file-based configuration (icon.png)
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
