import { Button, Modal, Form, Input, InputNumber } from 'antd';

import React from 'react';
import { useState } from 'react';

const AlbumsForm = () => {
    const [showForm, setShowForm] = useState(false)

    const showModal = () => {
        setShowForm(true);
    }

    const onFinish = (values) => {
        console.log('Success', values);
    }

    // Nothing being done here, but it can be used when the validation fails.
    const onFinishFailed = (errorInfo) => {
        console.log('Failure', errorInfo);
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
                <Form
                    name="formCreateAlbum"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
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
                        <Input />
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
                        <InputNumber />
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
                        <Input />
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
                </Form>
            </Modal>
        </div>
    )
}

export default AlbumsForm; 