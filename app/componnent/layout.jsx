
import Header from './header.jsx'
import Footer from './footer.jsx'


export default function Layout({children}){
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
