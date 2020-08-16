import React from 'react'
import PropTypes from 'prop-types'
import SearchPanel from './search-panel'
import {Row,Col} from 'reactstrap'
import FilterController from './filter-controller'
import ViewController from './view-controller'
import BulkController from './bulk-controller'
const Controller=({
    toggleForm,
    handlefilter,
    view,changeView,
    clearSelected,
    clearCompleted,
    reset,
    term,
    handleSearch})=>(
    <div>
        <SearchPanel
            term={term}
            toggleForm={toggleForm}
            handleSearch={handleSearch}
        />
        <Row className='my-4'>
            <Col md='4'>
                <FilterController handlefilter={handlefilter}/>
            </Col>   
            <Col md='4' className='d-flex justify-content-center align-items-center'>
                <ViewController view={view} changeView={changeView}/>
            </Col>   
            <Col md='4' className='d-flex'>
                <div className='ml-auto'>
                    <BulkController
                        clearSelected={clearSelected}
                        clearCompleted={clearCompleted}
                        reset={reset}
                    />
                </div>
            </Col>   
        </Row>
    </div>
)
 Controller.propTypes={
    term: PropTypes.string.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handlefilter: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
 }
export default Controller