import AppLayout from "../../components/AppLayout";
import { useState, useEffect } from 'react'
import Devit from "../../components/Devit";

export default function HomePage() {

    const [ timeline, setTimeline ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/statuses/home_timeline')
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(setTimeline)
            .catch(err => console.log('error >>>>>', err) )
    }, [])

    return (
        <>
            <AppLayout>
                <header>
                    <h2>Inicio</h2>
                </header>
                <section>
                    {timeline.map(devit => (
                        <Devit 
                            key={devit.id}
                            username={devit.username}
                            avatar={devit.avatar}
                            message={devit.message}
                            id={devit.id}
                        />
                    ))}
                </section>
                <nav></nav>
            </AppLayout>
            
            <style jsx>{`
                header {
                    align-items: center;
                    border-bottom: 1px solid #ccc;
                    height: 49px;
                    display: flex;
                    position: sticky;
                    top: 0;
                    width: 100%;
                }

                section {
                    padding-top: 49px;
                }

                h2 {
                    font-size: 21px;
                    font-weight: 700;
                }

                nav {
                    bottom: 0;
                    border-top: 1px solid #ccc;
                    height: 49px;
                    position: sticky;
                    width: 100%;
                }
            `}
            </style>
        </>
    )
}