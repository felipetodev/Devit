import Avatar from '../Avatar'
import useTimeAgo from '../../hooks/useTimeAgo'
import useDateTimeFormat from '../../hooks/useDateTimeFormat'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Devit({ avatar, userName, content, img, createdAt, id }) {

    const timeago = useTimeAgo(createdAt)
    const createdAtFormated = useDateTimeFormat(createdAt)
    const router = useRouter()

    const handleArticleClick = (e) => {
        e.preventDefault()
        router.push(`/status/${id}`)
    }

    return (
        <>
            <article onClick={handleArticleClick}>
                <div>
                    <Avatar alt={userName} src={avatar} />
                </div>
                <section>
                    <header>
                        <strong>{userName ? userName : 'Unknown User'}</strong>
                        <span> · </span>
                        <Link href={`/status/${id}`}>
                            <a>
                                <time title={createdAtFormated}>{timeago}</time>
                            </a>
                        </Link>
                    </header>
                    <p>{content}</p>
                    {img && <img src={img} />}
                </section>
            </article>
            
            <style jsx>{`
                article {
                    border-bottom: 2px solid #eee;
                    display: flex;
                    padding: 10px 15px;
                }

                article:hover {
                    background: #f5f8fa;
                    cursor: pointer;
                }

                strong {
                    margin-bottom: auto;
                }

                div {
                    padding-right: 10px;
                }

                img {
                    margin-top: 10px;
                    border-radius: 10px;
                    max-width: 100%;
                    height: auto;
                }

                p {
                    line-height: 1.3125;
                    margin: 0;
                }

                time {
                    color: #555;
                    font-size: 14px;
                }

                a {
                    color: #555;
                    font-size: 14px;
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }

            `}</style>
        </>
    )
}