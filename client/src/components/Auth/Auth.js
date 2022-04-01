import { GoogleLogin } from "react-google-login";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import useStyles from './styles';
import Icon from "./icon";
import { AUTH } from "../../constants/actionTypes";
const user = JSON.parse(localStorage.getItem("profile"));

const Auth = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  // const classes=useStyles();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;

    const token = res?.tokenId;
    console.log(res);
    try {
      dispatch({ type: AUTH, data: { result, token } });
      console.log(user);
      // setUser(result)
      navigation("/users/check");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (err) => {
    console.log(err);
    console.log("Google Sign In was unsuccessful. Try again later");
  };

  return (
    <GoogleLogin
      clientId="98009886032-g6f2l4bdiflglv6c4rlem1nsvg84ceh9.apps.googleusercontent.com"
      render={(renderProps) => (
        <Button
          color="secondary"
          fullWidth
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          variant="contained"
          startIcon={<Icon />}
        >
          Google Sign In
        </Button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleError}
      cookiePolicy="single_host_origin"
    />
  );
};

export default Auth;
