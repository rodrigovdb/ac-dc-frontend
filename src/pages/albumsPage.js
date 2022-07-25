import React from 'react';
//import { useState } from 'react';
import { useForm } from 'react-hook-form';

//import AlbumsForm from '../components/albums/form/albumsForm';
import AlbumsList from '../components/albums/list/albumsList';

const AlbumsPage = () => {
    //const { register, handleSubmit, watch, formState: { errors }} = useForm();
    const { register, handleSubmit, formState: { errors }} = useForm();

    function validateAndSubmit(data){
        console.log(data);
    }
    
    return(
        <div className='albumsPage'>
            <h2>Albums</h2>

            <div className="albumsForm formContainer" id="albumsForm" style={{display: 'none'}}>
                <form onSubmit={handleSubmit(validateAndSubmit)}>
                    <h3>Create / Edit Album</h3>

                    <div className="formItem">
                        <label to="name" className="formLabel">Album Name</label>
                        <input type="text" className="form-input px-4 py-3 formItemInput" {...register("name", { required: true })} />
                        {errors.name && <span className="requiredFieldError">This field is required</span>}
                    </div>

                    <div className="formItem">
                        <label to="year" className="formLabel">Release Year</label>
                        <input type="number" className="form-input px-4 py-3 formItemInput" {...register("year", { required: true })} />
                        {errors.year && <span className="requiredFieldError">This field is required</span>}
                    </div>

                    <div className="formItem">
                        <label to="coverImage" className="formLabel">Cover Image</label>
                        <input type="text" className="form-input px-4 py-3 formItemInput" {...register("coverImage", { required: true })} />
                        {errors.coverImage && <span className="requiredFieldError">This field is required</span>}
                    </div>

                    <br />

                    <div>
                        <input type="submit" value="Save" className="
                            bg-red-600 hover:bg-red-500
                            text-white font-bold
                            py-2 px-4 rounded
                        " />
                    </div>
                </form>
            </div>

            <button
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                onClick={(event) => {
                    console.log(event.target)
                }}>Create new Album</button>

            <AlbumsList />
        </div>
    );

    /*
        <AlbumsForm />
    */
};

export default AlbumsPage;