import './globals.css';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          background: 0,
          backgroundColor: 'rgba(36,36,36,1)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div className="flex min-h-screen flex-col items-center">
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
