import { Alert, Button, Modal, Form, Input } from 'antd';

import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useSongCreate } from '../hooks/useSongCreate';
import Loading from './loading';

const SongsForm = (props) => {
    const [showForm, setShowForm] = useState(false)
    const [formState, setFormState] = useState({
        albumId: props.albumId,
        name: '',
        duration: ''
    })

    const showModal = () => {
        setShowForm(true);
    }

    const [songCreate, {data, loading, error}] = useSongCreate(
        formState.albumId,
        formState.name,
        formState.duration
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
        console.log(data)
        return <Navigate replace to={`/ac-dc-frontend/albums/${data.songCreate.album.id}`} />
    }

    return(
        <div className="songsForm">
            <Button
                type="primary"
                onClick={showModal}
                className="buttonShowModal"
                danger
            >
                Add a Song
            </Button>

            <Modal
                title="Create a Song"
                visible={showForm}
                onCancel={() => { setShowForm(false) } }
                footer={[]}
            >
                <Form
                    onFinish={() => { console.log('aqui'); songCreate() }}
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
                            placeholder='Thunderstruck'
                            onChange={(e) => setFormState({
                                ...formState,
                                name: e.target.value
                            })}
                            />
                    </Form.Item>

                    <Form.Item
                        label="Duration"
                        name="duration"
                        rules={[
                            {
                                required: true,
                                message: "Please input a song duration"
                            },
                        ]}
                        >
                        <Input
                            placeholder='6:34'
                            onChange={(e) => setFormState({
                                ...formState,
                                duration: e.target.value
                            })}
                            />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                        <Button
                            type="primary"
                            htmlType="submit"
                            danger
                        >
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default SongsForm;