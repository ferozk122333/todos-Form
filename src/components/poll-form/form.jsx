import React from 'react'
import { FormGroup, Label, Form, Input, Button,FormFeedback} from 'reactstrap'
const Myform = ({
    title,
    description,
    options,
    errors,
    handleChange,
    handleOptionChange,
    createOption,
    deleteOption,
    handelSubmit,
    ButtonValue
}) => {
    return (
        <Form onSubmit={handelSubmit}>
            <FormGroup>
                <Label for='title'>Name</Label>
                <Input
                    name='title'
                    id='title'
                    placeholder='Enter Name'
                    value={title}
                    onChange={handleChange}
                    invalid={errors.title ? true : false}
                />
                {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
            </FormGroup>
            <FormGroup>
                <Label>Description</Label>
                <Input
                    name='description'
                    type='textarea'
                    value={description}
                    placeholder='Enter Description'
                    onChange={handleChange}
                    invalid={errors.description ? true : false}
                />
                {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
            </FormGroup>
            <FormGroup>
                <Label>
                    Enter Options
                    <Button className='ml-5' color='primary' onClick={createOption}>Add Option</Button>
                </Label>
                {
                    options.map((item, index) => (
                        <div key={item.id} className='d-flex my-2'>
                            <Input
                                placeholder='Enter Choice'
                                value={item.value}
                                onChange={e=>handleOptionChange(e,index)}
                                invalid={
                                    errors.options && errors.options[index]? true : false
                                }
                            />
                            <Button color='danger' className='ml-2' disabled={options.length <= 2} onClick={() => deleteOption(index)}>Delete</Button>
                        </div>
                    ))
                }
            </FormGroup>
            <Button type='submit' color='primary'>{ButtonValue}</Button>
        </Form>
    )
}
export default Myform