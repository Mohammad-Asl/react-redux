import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
};

const mapStateToPrps = (state, ownProps) => {
  const itemSet = ownProps.cake
    ? state.cake.numOfCake
    : state.iceCream.numOfIceCream;

  return {
    item: itemSet,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

    return {
        buyItem : dispatchFunction
    }
};

export default connect(mapStateToPrps , mapDispatchToProps)(ItemContainer);
