import ProductBar from '../components/ProductBar'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions'



const mapDispatchToProps = dispatch =>
	({
		cartAdd(product) {
			dispatch(
				addToCart(product)
			)
		}
	})

export default connect(null, mapDispatchToProps)(ProductBar)
