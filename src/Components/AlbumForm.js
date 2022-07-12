import React from 'react'
import { useState } from 'react';

import './AlbumForm.css'

/**
 * https://www.w3schools.com/react/react_forms.asp
 */
export default function AlbumForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();

      console.log("Save this: ", inputs);
    }
  
    return (
        <form onSubmit={handleSubmit}>
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
    )
}