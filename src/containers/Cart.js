import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions'

//dispatch should be rermove

const mapStateToProps = state =>
	({
		cart:state.cart,
		products: state.products
	})

const mapDispatchToProps = dispatch =>
	({
		cartAdd(product) {
			dispatch(
				addToCart(product)
			)
		}
	})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
