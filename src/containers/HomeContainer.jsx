import { connect, Connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../Services/Actions/action";

const mapStateTpProps = (state) => ({
  cardData:state
});

const mapDispatchToProps = dispatch =>({
addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateTpProps,mapDispatchToProps)(Home) ;