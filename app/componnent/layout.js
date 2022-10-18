
import Header from './header.js'
import Footer from '../componnent/footer.js'


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
