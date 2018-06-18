import CartProducts from '../components/CartProducts'
import { connect } from 'react-redux'
import { removeFromCart } from '../store/actions'



const mapDispatchToProps = dispatch =>
	({
		cartRemove(id) {
			dispatch(
				removeFromCart(id)
			)
		}
	})

export default connect(null, mapDispatchToProps)(CartProducts)
