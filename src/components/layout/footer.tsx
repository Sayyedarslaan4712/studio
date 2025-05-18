
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container max-w-screen-2xl text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} DevShelf. All rights reserved. Built with Next.js and ShadCN UI.</p>
      </div>
    </footer>
  );
}
