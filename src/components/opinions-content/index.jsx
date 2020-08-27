import React, { Component } from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import ButtonValue from './opinion-value'
class OpinionsButton extends Component {
    render() {
        if (Object.keys(this.props.poll).length == 0) {
            return ('')
        }
        return (
            <>
                {
                    this.props.poll.options.map(item => (
                        <ButtonGroup key={item.id} className='py-3'>
                            <Button
                                className='ml-1'
                                color='primary'
                                onClick={() => this.props.handleOpinionName(item.id)}
                                style={{ borderRadius: 'unset' }}
                            >
                                {item.value}
                            </Button>
                        </ButtonGroup>
                    ))
                }
                <Button
                    className='ml-1'
                    color='primary'
                    onClick={e => this.props.handleOpinionName(e)}
                    style={{ borderRadius: 'unset' }}
                >
                    All
                </Button>
                <ButtonValue
                    optionName={this.props.optionName}
                />
            </>
        );
    }
}

export default OpinionsButton;