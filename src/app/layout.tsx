import './globals.css';

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
