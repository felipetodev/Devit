import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub'
import { loginWithGitHub } from '../firebase/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useUser, { USER_STATES } from '../hooks/useUser'

export default function Home () {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleClick = () => {
    loginWithGitHub().catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Devit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.section}>
        <img className={styles.img} src="/altea_logo.png" alt="logo" />
        <h1 className={styles.h1}>Devit</h1>
        <h2 className={styles.h2}>Talk about development<br />with developers 👨‍💻👩‍💻</h2>
        <div className={styles.div}>
          {
            user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub fill='#fff' width={24} height={24} />
                  Login with GitHub
              </Button>
            )
          }
          {user === USER_STATES.NOT_KNOWN &&
            <img src='/spinner.gif' alt='Loading...' />
          }
        </div>
      </section>
    </div>
  )
}
