import { Alert, Button, Modal, Form, Input, InputNumber } from 'antd';

import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAlbumCreate} from '../hooks/albums/useAlbumCreate';
import Loading from './loading';

const AlbumsForm = () => {
    const [showForm, setShowForm] = useState(false)
    const [formState, setFormState] = useState({
        name: '',
        year: null,
        coverImage: ''
    })

    const showModal = () => {
        setShowForm(true);
    }

    const [albumCreate, {data, loading, error}] = useAlbumCreate(
        formState.name,
        formState.year,
        formState.coverImage
    )
    if(loading){
        return <Loading />;
    }
    if(error){
        return(
            <div>
                <Alert
                    message="Error"
                    description={error.message}
                    type="error"
                    showIcon
                />
            </div>
        );
    }
    if(data){
        return <Navigate replace to={`/ac-dc-frontend/albums/${data.albumCreate.id}`} />
    }

    return(
        <div className="albumsForm">
            <Button
                type="primary"
                onClick={showModal}
                className="buttonShowModal"
            >
                Create Album
            </Button>

            <Modal
                title="Create an Album"
                visible={showForm}
                onCancel={() => { setShowForm(false) } }
                footer={[]}
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        albumCreate()
                    }}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input a song name"
                            },
                        ]}
                        >
                        <Input
                            onChange={(e) => setFormState({
                                ...formState,
                                name: e.target.value
                            })}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Year"
                        name="year"
                        rules={[
                            {
                                required: true,
                                message: "Please input an year"
                            },
                        ]}
                        >
                        <Input
                            onChange={(e) => setFormState({
                                ...formState,
                                year: e.target.value
                            })}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Cover Image"
                        name="coverImage"
                        rules={[
                            {
                                required: true,
                                message: "Please input an URL for cover image"
                            },
                        ]}
                        >
                        <Input
                            onChange={(e) => setFormState({
                                ...formState,
                                coverImage: e.target.value
                            })}
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </form>
            </Modal>
        </div>
    )
}

export default AlbumsForm; 