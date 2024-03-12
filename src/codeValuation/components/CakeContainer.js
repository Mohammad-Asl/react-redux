import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'


const CakeContainer = (props) => {
  return (
    <div >
        <h2>Number Of Cake - {props.numOfCake}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateProps = state => {
  return{
    numOfCake : state.cake.numOfCake
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake : () => dispatch(buyCake())
  }

}

export default connect(mapStateProps,mapDispatchToProps) (CakeContainer)