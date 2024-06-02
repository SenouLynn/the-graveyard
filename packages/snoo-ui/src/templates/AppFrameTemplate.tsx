/**
 *
 * Test template:
 *  - Set base section layout
 *  - Set Navbar, Main, Footer sections, you drive what goes inside
 *  - Always takes up full screen at minimum
 *
 */

export const AppFrameTemplate = ({
  Navbar,
  Main,
  Footer,
}: {
  Navbar: () => JSX.Element;
  Main: () => JSX.Element;
  Footer: () => JSX.Element;
}) => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <nav className="min-h-30">
        <Navbar />
      </nav>
      <Main />
      <footer className="max-h-40 h-fit">
        <Footer />
      </footer>
    </div>
  );
};
