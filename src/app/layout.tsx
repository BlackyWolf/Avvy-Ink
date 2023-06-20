import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

// config.autoAddCss = false;

export const metadata = {
    title: 'Avvy Ink',
    description: 'Avatars everywhere, hooray!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
