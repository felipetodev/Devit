import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub'
import { loginWithGitHub, onAuthStateChanged } from '../firebase/client'
import { useState, useEffect } from 'react'
import Avatar from '../components/Avatar'

export default function Home () {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGitHub().then(user => {
      setUser(user)
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Devit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout className={styles.main}>
        <section className={styles.section}>
          <img className={styles.img} src="/altea_logo.png" alt="logo" />
          <h1 className={styles.h1}>Devit</h1>
          <h2 className={styles.h2}>Talk about development<br/>with developers 👨‍💻👩‍💻</h2>
          <div className={styles.div}>
            {
              user === null && (
                <Button onClick={handleClick}>
                  <GitHub fill='#fff' width={24} height={24}/>
                  Login with GitHub
                </Button>
              )
            }
            {
              user && user.avatar && (
                <div>
                  <Avatar 
                    src={user.avatar} 
                    alt={user.username} 
                    text={user.username}
                  />
                </div>
              )
            }
          </div>
        </section>
      </AppLayout>
    </div>
  )
}
