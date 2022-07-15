import React from 'react';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import Album from '../../../../models/album.model';
import { ALBUM_CREATE } from '../../../../graphql/albumCreate.mutation';
import { ALBUM_CREATE as ALBUM_UPDATE } from '../../../../graphql/albumCreate.mutation';
import Loading from '../../loading/loading.component'

import './albums-form.component.css'

const AlbumsForm = (album) => {
    // Initialize an empty album, if is not provided
    if(Object.keys(album).length === 0){
        album = new Album();
    }

    const { register, handleSubmit } = useForm();
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        album[name] = value;
        
        setInputs(values => ({ ...values, [name]: value }))
    }
    
    const query = album.id == undefined ? ALBUM_CREATE : ALBUM_UPDATE;
    const [albumCreate, {data, loading, error}] = useMutation(query, {
        variables: {
            name: inputs.name,
            year: parseInt(inputs.year),
            coverImage: inputs.coverImage
        }
    })
    
    if(loading){
        return <Loading />;
    }
    if(error){
        return <div>`Submission error! ${error.message}`</div>;
    }
    if(data){
        return <Navigate replace to={`/ac-dc-frontend/albums/${data.albumCreate.id}`} />
    }

    const isValid = () => {
        return inputs.name != undefined &&
            inputs.year != undefined &&
            inputs.year != NaN &&
            inputs.coverImage != undefined
    }

    const onSubmit = async() => {
        if(!isValid()){
            console.log('Invalid Form');
            return;
        }

        if(album.id == undefined){
            albumCreate(inputs.name, inputs.year, inputs.coverImage)
        }
        else{
            console.log('albumUpdate')
        }
    };

    return(
        <div className="albumsForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Album</h3>
                
                <div className="fieldRow">
                    <label to="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={album.name}
                        onChange={handleChange} />
                </div>

                <div className="fieldRow">
                    <label to="name">Year: </label>
                    <input
                        type="number"
                        name="year"
                        value={album.year}
                        onChange={handleChange} />
                </div>

                <div className="fieldRow">
                    <label to="coverImage">Cover Image: </label>
                    <input
                        type="text"
                        name="coverImage"
                        value={album.coverImage}
                        onChange={handleChange} />
                </div>

                <br />

                <div className="fieldRow">
                    <input type="hidden" name="id" value={album.id} />
                    <input type="submit" value="Save" />
                </div>
            </form>
        </div>
    );
}

export default AlbumsForm;