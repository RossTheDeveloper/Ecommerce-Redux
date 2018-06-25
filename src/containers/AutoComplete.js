import AutoComplete from '../components/AutoComplete'
import { connect } from 'react-redux'




const mapStateToProps = state =>
	({
		products: state.products
	})


export default connect(mapStateToProps)(AutoComplete)
