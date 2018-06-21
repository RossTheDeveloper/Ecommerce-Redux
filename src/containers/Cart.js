import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions'



const mapStateToProps = state =>
	({
		cart:state.cart,
		products: state.products
	})


export default connect(mapStateToProps)(Cart)
