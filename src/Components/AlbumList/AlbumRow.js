import { Link } from 'react-router-dom';

export default function AlbumRow(props) {
    return (
        <Link to={`/ac-dc-frontend/albums/${props.id}`}>
            <li className="AlbumsListItem">
                <img alt={props.name} src={props.coverImage} />

                <div className="AlbumListContent">
                    <h3 className="AlbumsListItemName">
                        {props.name}
                    </h3>
                    <h4 className="AlbumsListItemYear">
                        {props.year}
                    </h4>
                    <h5 className="SongsCount">
                        <div>{props.totalDuration}</div>
                        <div>{props.songsLength} songs</div>
                    </h5>
                </div>
            </li>
        </Link>
    )
}