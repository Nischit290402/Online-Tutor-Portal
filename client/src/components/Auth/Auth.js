import {GoogleLogin} from 'react-google-login';
import {Button} from '@mui/material';
// import useStyles from './styles';


const Auth=()=>{

    // const classes=useStyles();

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        console.log(res);
        // try {
        //   dispatch({ type: AUTH, data: { result, token } });
    
        //   history.push('/');
        // } catch (error) {
        //   console.log(error);
        // }
    };

    const googleError = (err) =>{
        console.log(err);
        console.log('Google Sign In was unsuccessful. Try again later');
    }
    
    return(
        <GoogleLogin
            clientId="98009886032-g6f2l4bdiflglv6c4rlem1nsvg84ceh9.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            // cookiePolicy="single_host_origin"
        />
    );
};

export default Auth;