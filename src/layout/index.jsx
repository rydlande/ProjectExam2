import { Header, Footer } from '../components'

export function Layout({ children }) {
    return (
      <>
        <Header />
          <main className="grow">{children}</main>
        <Footer />
      </>
    );
}