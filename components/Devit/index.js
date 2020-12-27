import Avatar from '../Avatar'
import useTimeAgo from '../../hooks/useTimeAgo'

export default function Devit({ avatar, userName, content, img, createdAt, id }) {

    const timeago = useTimeAgo(createdAt)

    return (
        <>
            <article>
                <div>
                    <Avatar alt={userName} src={avatar} />
                </div>
                <section>
                    <header>
                        <strong>{userName ? userName : 'Unknown User'}</strong>
                        <span> · </span>
                        <time>{timeago}</time>
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

            `}</style>
        </>
    )
}