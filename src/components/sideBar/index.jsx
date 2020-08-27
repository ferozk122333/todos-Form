import React, { Component } from 'react';
import { Container, Input, Button,Modal,ModalBody,ModalHeader} from 'reactstrap'
import PollListItem from './poll-list-item'
import PollForm from '../poll-form'
class SideBar extends Component {
    state={
        isOpenModal:false
    }
    toggleModal=event=>{
        this.setState({
            isOpenModal:!this.state.isOpenModal
        })
    }
    render() {
        return (
            <div className='my-4'>
                <div className='d-flex'>
                    <Input
                        type='search'
                        placeholder='Enter search'
                        onChange={e=>this.props.handleSearch(e.target.value)}
                    />
                    <Button type='button' color='primary' className='ml-2' onClick={this.toggleModal}>
                        New
                    </Button>
                </div>
                <h3>List of Polls</h3>
				<hr />
				<PollListItem
                    polls={this.props.polls}
                    selectPoll={this.props.selectPoll}
				/>
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal} unmountOnClose={true}>
                    <ModalHeader toggle={this.toggleModal}>Create A Item List</ModalHeader>
                    <ModalBody>
                        <PollForm
                            submit={this.props.addNewPoll}
                            ButtonValue={this.props.ButtonValue}
                        />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SideBar;
