import React, { Component } from 'react';
import shortid from 'shortid'
import Myform from './form'
const DefaultOptions= [
    {id: shortid.generate(),value:'',vote:0},
    {id: shortid.generate(),value:'',vote:0},
]
class PollForm extends Component {
    state={
        title:'',
        description:'',
        options:DefaultOptions,
        errors:{}
    }
    componentDidMount(){
       const {poll}=this.props
       if(poll && Object.keys(poll).length>0){
            this.setState({
                title:poll.title,
                description:poll.description,
                options:poll.options
           })
       }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleOptionChange=(event,index)=>{
        const {options}=this.state
        options[index].value=event.target.value
        this.setState({options })
    }
    createOption=()=>{
        const {options}=this.state
        if(options.length <= 5){
            options.push({
                id:shortid.generate(),
                value:'',
                vote:0,
            })
        this.setState({options})
        }else{
            alert('You can create max 5 option')
        }
    }
    deleteOption=(index)=>{
        const {options}=this.state
        if(options.length > 2){
            options.splice(index,1)
            this.setState({options})
        }else{
            alert('you must have last 2 options')
        }
    }
    handelSubmit=event=>{
        event.preventDefault()
        const {errors,isValid}=this.validate()
        if(isValid){
            const {title,description,options}=this.state
            const poll={
                title,
                description,
                options,
            }
            if(this.props.isUpdate){
                poll.id=this.props.poll.id
                this.props.submit(poll)
                alert('updated Successfully')
            }else{
                this.props.submit(poll)
                event.target.reset();
                this.setState({
                    title: '',
                    description: '',
                    options: DefaultOptions,
                    errors:{}
                });
            }
        }else{
            this.setState({errors})
        }

    }
    validate=()=>{
        const errors={}
        const {title,description,options}=this.state
        if (!title) {
			errors.title = 'Please Provide A Title';
		} else if (title.length < 20) {
			errors.title = 'Tittle Too Short';
		} else if (title.length > 100) {
			errors.title = 'Tittle Too Long';
		}

		if (!description) {
			errors.description = 'Please Provide A Description';
		} else if (description.length > 500) {
			errors.description = 'Description Too Long';
        }
        const optionErrors=[]
        options.forEach((item,index)=>{
            if(!item.value){
                optionErrors[index] = 'Option Text Empty';
            }else if(!item.value.length>500){
                optionErrors[index] = 'Option Text Too Long';
            }
        })
        if(optionErrors.length > 0){
            errors.options = optionErrors
        }
        return{
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }
    render() {
        const { title, description, options, errors } = this.state;
        return (
            <div>
                <Myform 
                    title={title}
                    description={description}
                    options={options}
                    errors={errors}
                    handleChange={this.handleChange}
                    handleOptionChange={this.handleOptionChange}
                    createOption={this.createOption}
                    deleteOption={this.deleteOption}
                    handelSubmit={this.handelSubmit}
                    ButtonValue={this.props.ButtonValue || 'Create new poll'}
                />
            </div>
        );
    }
}

export default PollForm;
