import React, { Component } from 'react';
import {Button,Modal,ModalBody,ModalHeader} from 'reactstrap'
import ParticipleForm from '../participle-form'
import PollForm from '../poll-form'
class MainContent extends Component {
    state={
        isOpenModal:false
    }
    toggleModal=()=>{
        this.setState({isOpenModal: !this.state.isOpenModal})
    }
    render() {
        if(Object.keys(this.props.poll).length==0){
            return(
                <div>
                    <h3>welcome to my application</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam at culpa rem quia,
                        impedit dolore nesciunt mollitia facere adipisci temporibus.</p>
                </div>
            )
        }
        const {poll,getOpinion,updatePoll,deletePoll}=this.props
        return (
            <div className='my-3'>
                <h3>{poll.title}</h3>
                <p>{poll.description}</p>
                <ParticipleForm
                    poll={poll}
                    deletePoll={deletePoll}
                    getOpinion={getOpinion}
                    toggleModal={this.toggleModal}
                />
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal} unmountOnClose={true}>
                    <ModalHeader toggle={this.toggleModal}>Update poll</ModalHeader>
                    <ModalBody>
                        <PollForm
                            poll={poll}
                            isUpdate={true}
                            ButtonValue='update Poll'
                            submit={updatePoll}
                        />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default MainContent;
