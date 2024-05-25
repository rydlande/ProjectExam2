import { Header, Footer } from '../components'

export function Layout({ children }) {
    return (
      <>
        <Header />
          <main className="grow mt-14">{children}</main>
        <Footer />
      </>
    );
}