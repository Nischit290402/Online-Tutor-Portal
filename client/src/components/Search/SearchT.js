import React, { useState,useEffect} from "react";
import InputGroup from "react-bootstrap/InputGroup";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"; 
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import  Autocomplete  from "@mui/material/Autocomplete";
import "./styles.css";
import { styled } from "@mui/material/styles";

//styling search bar for searching tutor
const StyledAutocomplete = styled(Autocomplete)({
  
  "& .MuiAutocomplete-inputRoot": {
    color: "#B9B8D3",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
      // Default left padding is 6px
      paddingLeft: 26
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "aquamarine"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "darksalmon"
    },
    "&.css-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicato":{
      color: "white"
    }
  },
  "& .MuiInputLabel-root": {
    color: "#ff6663"
  }
});

//create search bar for searching course
const SearchBarT=()=> {
    const navigation = useNavigate();
    const [data,getdata] = useState('');
    useEffect(()=>{
      f();
    },[])
 
    const f=async()=>{
      await axios.get("/tutors-info")
   .then((response) => {
     getdata(response.data);
   });
  }
   
    
    const handleSubmit = (event) => {
      event.preventDefault();
      var tutors = data;
      var TutorInfo = [];
      let y = {};
      for (let i = 0; i < tutors.length; i++) {  
        if(tutors[i].name==event.target.defaultValue)
        {  y._id = tutors[i]._id;
          y.image = tutors[i].image;
          y.name = tutors[i].name;
          y.email = tutors[i].email;
          y.qual = tutors[i].qualification;
          y.exp = tutors[i].exp;
          TutorInfo.push(y);
        }
      }
      navigation("/tutorinformation/"+ TutorInfo[0]._id, {state: {qual: TutorInfo[0].qual, exp: TutorInfo[0].exp, name: TutorInfo[0].name, email: TutorInfo[0].email}})
    };
    
    var tutors = data;
    var SearchInfo = [];
    for (let i = 0; i < tutors.length; i++) {
      let x = {};
      x.name = tutors[i].name;
      x.email = tutors[i].email;
      SearchInfo.push(x);
    }
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && SearchInfo.length === 0;

    function sleep(delay = 0) {
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }
    React.useEffect(() => {
      let active = true;
    
      if (!loading) {
        return undefined;
      }
    
      (async () => {
        await sleep(1e3); // For demo purposes.
    
        if (active) {
          setOptions([...SearchInfo]);
        }
      })();
    
      return () => {
        active = false;
      };
    }, [loading]);
    
    React.useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);
    

    return(
        <InputGroup className="me" direction="row">
          <StyledAutocomplete
            disablePortal
            id="combo-box-demo"
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            autoComplete
            selectOnFocus
            options={SearchInfo}
            getOptionLabel={(option) => option.name}
            //groupBy={(option) => option.title.substring(0,2)}
            loading={loading}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Tutor" InputProps={{...params.InputProps,endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
              )}} 
            />}
            onKeyDown={(event,value) => 
              {if(event.key === 'Enter')
              handleSubmit(event)
              }
            }    
          />
        </InputGroup>
    );
  }


export default SearchBarT;