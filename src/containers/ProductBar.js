import ProductBar from '../components/ProductBar'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions'

//dont need props 1st arg, how to fix?

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductBar)
