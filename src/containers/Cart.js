import Cart from '../components/Cart'
import { connect } from 'react-redux'




const mapStateToProps = state =>
	({
		cart:state.cart,
		products: state.products
	})


export default connect(mapStateToProps)(Cart)
