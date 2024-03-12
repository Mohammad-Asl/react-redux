import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'


const iceCreamContainer = (props) => {
  return (
    <div >
        <h2>Number Of IceCream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateProps = state => {
  return{
    numOfIceCream : state.iceCream.numOfIceCream
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream : () => dispatch(buyIceCream())
  }

}

export default connect(mapStateProps,mapDispatchToProps) (iceCreamContainer)