import React from 'react'
import shortid from 'shortid'
import { Row, Col, Container } from 'reactstrap'
import SideBar from './components/sideBar'
import MainContent from './components/main-content'
import OpinionsButton from './components/opinions-content'
import POLLS from './data/polls';
class App extends React.Component {
    state={
        polls:[],
        selectTedPoll:{},
        searchTerm: '',
        optionName:{}
    }
    componentDidMount() {
        this.setState({ polls: POLLS })
    }
    addNewPoll=(poll)=>{
        poll.id=shortid.generate()
        poll.created = new Date();
		poll.totalVote = 0;
        poll.opinions = [];
        this.setState({
            polls:this.state.polls.concat(poll)
        })
    }
    selectPoll=(pollId)=>{
        const poll = this.state.polls.find(p=>p.id===pollId)
        this.setState({
            selectTedPoll:poll
        })
    }
    deletePoll=(ditemid)=>{
        const polls=this.state.polls.filter(d=>d.id!==ditemid)
        this.setState({
            polls,
            selectTedPoll:{}
        })
    }
    getOpinion=(respons)=>{
        const {polls}=this.state
        const poll=polls.find(p=>p.id===respons.pollId)
        const option=poll.options.find(o=>o.id==respons.selectedOption)
        poll.totalVote++
        option.vote++
        const opinion={
            id:shortid.generate(),
            name:respons.name,
            selectedOption:respons.selectedOption
        }
        poll.opinions.push(opinion)
        this.setState({polls})
    }
    updatePoll=(updatepoll)=>{
        const polls=[...this.state.polls]
        const poll=polls.find(p=>p.id===updatepoll.id)
        poll.title=updatepoll.title
        poll.description=updatepoll.description
        poll.options=updatepoll.options
        this.setState({polls})
    }

    handleOpinionName=(index)=>{
        const opinions = this.state.selectTedPoll.opinions.filter(p=>p.selectedOption===index)
        this.setState({optionName:opinions})
        console.log(this.state.optionName)
    }
    handleSearch=searchTerm=>{
        this.setState({
            searchTerm
        })
    }
    perFormSearch=()=>{
        return this.state.polls.filter(ser=>ser.title.toLowerCase()
        .includes(this.state.searchTerm.toLowerCase()))
    }
 
    render() {
        const polls=this.perFormSearch()
        console.log(this.state)
        return (
            <Container>
                <Row>
                    <Col md='4'>
                        <SideBar
                            polls={polls}
                            searchTerm={this.state.searchTerm}
                            handleSearch={this.handleSearch}
                            addNewPoll={this.addNewPoll}
                            selectPoll={this.selectPoll}
                        />
                    </Col>
                    <Col md='8'>
                        <MainContent 
                            poll={this.state.selectTedPoll}
                            getOpinion={this.getOpinion}
                            updatePoll={this.updatePoll}
                            deletePoll={this.deletePoll}
                        />
                        <OpinionsButton
                            poll={this.state.selectTedPoll}
                            handleOpinionName={this.handleOpinionName}
                            optionName={this.state.optionName}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default App