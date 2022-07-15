import React from 'react';
import { useParams } from 'react-router';

import { useAlbum } from '../../hooks/albums/useAlbum';
import SongsForm from '../../components/app/songs/songs-form/songs-form.component'
import Loading from '../../components/app/loading/loading.component';

const SongsFormPage = () => {
    const {id} = useParams()
    const { error, loading, data } = useAlbum(id);

    if(loading){
        return <Loading />
    }
    if(error){
        return <div>something went wrong: {error}</div>
    }
    if(data){
        return(
            <div className="songsFormPage">
                <SongsForm album={data.album} />
            </div>
        )
    }
};

export default SongsFormPage;