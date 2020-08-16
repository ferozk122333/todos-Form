import React from 'react'
import PropTypes from 'prop-types'
import {Input,Button} from 'reactstrap'

const SearchPanel=({term,toggleForm,handleSearch})=>(
    <div className='d-flex'>
        <Input
            placeholder='Enter search term'
            className='mr-3'
            value={term}
            onChange={e=>handleSearch(e.target.value)}
        />
        <Button color='success' onClick={toggleForm}>
            new
        </Button>
    </div>
)
 SearchPanel.propTypes={
    term: PropTypes.string.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
 }
export default SearchPanel