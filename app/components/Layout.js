
import Header from './Header.js'
import Footer from './Footer.js'
import styles from '../styles/Layout.module.css'

export default function Layout({children}){
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
