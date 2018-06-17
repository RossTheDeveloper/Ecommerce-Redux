import ProductPage from '../components/ProductPage'
import { connect } from 'react-redux'

const mapStateToProps = (state,props) => {

	return {
		products: state.products,
    filter: Number(props.match.params.filter)
  }

}

const Container = connect(mapStateToProps)(ProductPage)

export default Container
