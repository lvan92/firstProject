import { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from './component/Spinner.component';
import * as loadingActions from './actions/loading.action';
import Toast from 'react-native-toast-message';
import { Home } from './screens/Home.screen';

class InitApp extends Component {
    componentDidMount() {
        setTimeout(()=>{
            this.props.loadingActions.loading(false);
        },5000)
    }
    render() {
        return (
            <>
                <Spinner>
                <Home/>
                </Spinner>
                
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadingActions: bindActionCreators(loadingActions, dispatch),
    };
}
export default connect(null,mapDispatchToProps)(InitApp);