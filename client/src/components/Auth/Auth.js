import { GoogleLogin } from "react-google-login";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import useStyles from './styles';
import Icon from "./icon";
import { AUTH } from "../../constants/actionTypes";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("profile"));
// google login
const Auth = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  // const classes=useStyles();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;

    const token = res?.tokenId;
    console.log(res);
    try {
      await dispatch({ type: AUTH, data: { result, token } });
      console.log(result);
      await axios.get(`http://localhost:5000/users/check/${result.email}`)
      .then((response) => {
        console.log(response);
        if(response.data){
          if (response.data.role === "student") {
            navigation('/student')
          } else if (response.data.role === "parent") {
            navigation('/parent')
          } else if (response.data.role === "tutor") {
            navigation('/tutor')
          } else {
            navigation('/');
          }
        }
        else{
          navigation('/users/check');
        }
      })
      .catch((err) => console.log(err));

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
