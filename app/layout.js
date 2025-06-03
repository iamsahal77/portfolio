import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Sahal KV | Portfolio",
  description: "Welcome to Sahal KV's portfolio website. Explore my work as a web developer, showcasing projects, skills, and professional experience.",
  keywords: ["Sahal KV", "Sahal", "sahalkv", "web developer", "portfolio", "developer portfolio", "frontend developer", "full stack developer"],
  authors: [{ name: "Sahal KV" }],
  creator: "Sahal KV",
  openGraph: {
    title: "Sahal KV | Portfolio",
    description: "Welcome to Sahal KV's portfolio website. Explore my work as a web developer, showcasing projects, skills, and professional experience.",
    type: "website",
    locale: "en_US",
    siteName: "Sahal KV Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahal KV | Portfolio",
    description: "Welcome to Sahal KV's portfolio website. Explore my work as a web developer, showcasing projects, skills, and professional experience.",
    creator: "@sahalkv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // You'll need to add your Google Search Console verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
