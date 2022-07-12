import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, gql } from "@apollo/client"
import { Navigate } from 'react-router-dom';

import Loading from './Loading';
import './AlbumForm.css'

/**
 * https://www.w3schools.com/react/react_forms.asp
 */
export default function AlbumForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setInputs(values => ({...values, [name]: value}))
    }

    const CREATE_ALBUM = gql`
        mutation AlbumCreate($name: String!, $year: Int!, $coverImage: String!){
            albumCreate(
            input: {
                name: $name,
                year: $year,
                coverImage: $coverImage
            }
            ) {
            id
            name
            year
            coverImage
            }
        }
    `

    const [createAlbum, {data, loading, error}] = useMutation(CREATE_ALBUM, {
        variables: {
            name: inputs.name,
            year: parseInt(inputs.year),
            coverImage: inputs.coverImage
        }
    })

    if(loading){
        return <Loading />
    }
    if(error){
        return <div>`Submission error! ${error.message}`</div>;
    }
    if(data){
        return <Navigate replace to={`/ac-dc-frontend/albums/${data.albumCreate.id}`} />
    }

    const onSubmit = async() => {
        createAlbum(inputs.name, inputs.year, inputs.coverImage)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="formFieldset">
                <h2>Create new album</h2>
        
                <div className="fieldRow">
                    <label to="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange} />
                </div>

                <div className="fieldRow">
                    <label to="year">Year: </label>
                    <input
                        type="number"
                        name="year"
                        value={inputs.year || ""}
                        onChange={handleChange} />
                </div>

                <div className="fieldRow">
                    <label to="coverImage">Cover Image: </label>
                    <input
                        type="text"
                        name="coverImage"
                        value={inputs.coverImage || ""}
                        onChange={handleChange} />
                </div>

                <br />

                <div className="fieldRow">
                    <input type="submit" value="Save" />
                </div>
            </fieldset>
        </form>
    );
}