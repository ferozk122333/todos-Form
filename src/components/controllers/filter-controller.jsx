import React from 'react'
import PropTypes from 'prop-types'
import {ButtonGroup,Button} from 'reactstrap'
const FilterController=({handlefilter})=>{
    return(
        <ButtonGroup className='d-flex'>
            <Button onClick={()=>handlefilter('all')}>All</Button>
            <Button onClick={()=>handlefilter('running')}>Running</Button>
            <Button onClick={()=>handlefilter('completed')}>Completed</Button>
        </ButtonGroup>
    )
}
FilterController.propTypes={
    handlefilter:PropTypes.func.isRequired,
}
export default FilterController