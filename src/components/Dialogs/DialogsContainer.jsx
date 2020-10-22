import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageCreater } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        state: state.dialogReducer,
        isAuth: state.authReducer.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (value) => {
            dispatch(addMessageCreater(value))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)