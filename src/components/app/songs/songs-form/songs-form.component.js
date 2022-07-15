import React from 'react';
import { useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { useMutation, gql } from '@apollo/client';
import { Navigate } from 'react-router-dom';

import { SONG_CREATE } from '../../../../graphql/songCreate.mutation';
import { SONG_CREATE as SONG_UPDATE } from '../../../../graphql/songCreate.mutation';
import Loading from '../../loading/loading.component'

import './songs-form.component.css'

const SongsForm = (album, song) => {
    album = album.album;

    const { register, handleSubmit } = useForm();
    const [inputs, setInputs] = useState({
        albumId: album.id
    });
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setInputs(values => ({ ...values, [name]: value }))
    }
    
    const query = song.id == undefined ? SONG_CREATE : SONG_UPDATE;
    const [songCreate, {data, loading, error}] = useMutation(query, {
        variables: {
            albumId: inputs.albumId,
            name: inputs.name,
            duration: inputs.duration
        }
    })
    
    if(loading){
        return <Loading />;
    }
    if(error){
        return <div>`Submission error! ${error.message}`</div>;
    }
    if(data){
        return <Navigate replace to={`/ac-dc-frontend/albums/${album.id}`} />
    }

    const isValid = () => {
        console.log(inputs)

        return inputs.albumId != undefined &&
            inputs.albumId != NaN &&
            inputs.name != undefined &&
            inputs.duration != undefined
    }

    const onSubmit = async() => {
        if(!isValid()){
            console.log('Invalid Form');
            return;
        }

        if(song.id == undefined){
            songCreate(inputs.albumId, inputs.name, inputs.duration)
        }
        else{
            console.log('songUpdate')
        }
    };

    return(
        <div className="songsForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Song</h3>

                <div className="fieldRow">
                    <label to="name">Album: </label>
                    {album.name}
                </div>

                <div className="fieldRow">
                    <label to="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        placeholder="Thunderstruck"
                        onChange={handleChange} />
                </div>

                <div className="fieldRow">
                    <label to="duration">Duration:</label>
                    <input
                        type="text"
                        name="duration"
                        value={inputs.duration}
                        placeholder="6:34"
                        onChange={handleChange} />
                </div>

                <br />

                <div className="fieldRow">
                    <input type="hidden" name="albumId" value={album.id} />
                    <input type="hidden" name="id" value={inputs.id} />
                    <input type="submit" value="Save" />
                </div>
            </form>
        </div>
    );
}

export default SongsForm;