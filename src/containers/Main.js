import Main from '../components/Main'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {

	return {
		products: state.products
  }

}

const Container = connect(mapStateToProps)(Main)

export default Container
