import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageCreater, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        state: state.dialogReducer,
        isAuth: state.authReducer.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        addNewMessage: () => {
            dispatch(addMessageCreater())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)