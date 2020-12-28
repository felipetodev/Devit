import { useState, useEffect } from 'react'
import Devit from "../../components/Devit";
import useUser from "../../hooks/useUser";
import { listenLatestDevits } from "../../firebase/client";
import Create from "../../components/Icons/Create";
import Home from "../../components/Icons/Home";
import Search from "../../components/Icons/Search";
import Link from 'next/link'
import Head from 'next/head'

export default function HomePage() {

    const [ timeline, setTimeline ] = useState([])
    const user = useUser()

    useEffect(() => {
        let unsubscribe
        if(user) {
            unsubscribe = listenLatestDevits(setTimeline)
        }
        return () => unsubscribe && unsubscribe()

    }, [user])

    return (
        <>
            <Head>
                <title>Inicio / Devit</title>
            </Head>
            <header>
                <h2>Inicio</h2>
            </header>
            <section>
                {timeline.map(devit => (
                    <Devit
                        key={devit.id}
                        userName={devit.userName}
                        avatar={devit.avatar}
                        img={devit.img}
                        content={devit.content}
                        id={devit.id}
                        userId={devit.userId}
                        createdAt={devit.createdAt}
                    />
                ))}
            </section>
            <nav>
                <Link href="/home">
                    <a>
                        <Home
                            stroke="#09f"
                            width={32}
                            height={32}
                        />
                    </a>
                </Link>
                <Link href="/compose/tweet">
                    <a>
                        <Create
                            stroke="#09f"
                            width={32}
                            height={32}
                        />
                    </a>
                </Link>
                <Link href="/compose/search">
                    <a>
                        <Search
                            stroke="#09f"
                            width={32}
                            height={32}
                        />
                    </a>
                </Link>
            </nav>

            <style jsx>{`
                header {
                    background: #ffffffaa;
                    backdrop-filter: blur(15px);
                    align-items: center;
                    border-bottom: 1px solid #eee;
                    height: 49px;
                    display: flex;
                    position: sticky;
                    top: 0;
                    width: 100%;
                }

                section {
                    flex: 1;
                }

                h2 {
                    font-size: 21px;
                    font-weight: 700;
                    padding-left: 15px;
                }

                nav {
                    display: flex;
                    background: #fff;
                    bottom: 0;
                    border-top: 1px solid #eee;
                    height: 49px;
                    position: sticky;
                    width: 100%;
                }

                nav a {
                    display: flex;
                    flex: 1 1 auto;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }

                nav a:hover {
                    background: radial-gradient(#0099ff22 15%, transparent 16%);
                    background-size: 180px 180px;
                    background-position: center;
                }
            `}
            </style>
        </>
    )
}