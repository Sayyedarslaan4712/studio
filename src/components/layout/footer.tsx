
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container max-w-screen-2xl text-center text-sm text-muted-foreground">
        <p>
          &copy; {currentYear} Sayyed Arslan. Proudly hosted at{' '}
          <a
            href="https://sayyedarslaan.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            sayyedarslaan.web.app
          </a>
          . All rights reserved. Built with Next.js and ShadCN UI.
        </p>
      </div>
    </footer>
  );
}
