import React from 'react';
import { useForm } from 'react-hook-form';

import Album from '../../../../models/album.model';

import './albums-form.component.css'

const AlbumsForm = (album) => {
    const { register, handleSubmit } = useForm();

    if(Object.keys(album).length === 0){
        album = new Album();
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        album[name] = value;
    }

    const onSubmit = () => {
        console.log(album);
    };

    return(
        <div className="albumsForm">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <input type="submit" value="Save" />
                </div>
            </form>
        </div>
    );

    /*
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [inputs, setInputs] = useState({});

    const onSubmit = (data) => {
        console.log(data);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setInputs(values => ({...values, [name]: value}))
    }

    return(
        <div className="albumsForm">
            <form onSubmit={handleSubmit(onSubmit)}>

            </form>
        </div>
    );
    */
}

export default AlbumsForm;