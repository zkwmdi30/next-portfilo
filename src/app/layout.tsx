import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          background: 0,
          backgroundColor: 'rgba(36,36,36,1)',
          position: 'relative',
          maxWidth: '900px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {children}
      </body>
    </html>
  );
}
