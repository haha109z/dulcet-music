import React, { useState, useEffect } from 'react'

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  }
}));


function NewsCategory(props) {

  const classes = useStyles();
  const [state, setState] = useState({
    month: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  
  return (
    <>
      <div className="news-CategoryContainer d-flex news-NotoSerifTC">
        <div className="news-Category">
          <ul className="d-flex justify-content-start">
            <li>
              <a href="">全部</a>
            </li>
            <li>
              <a href="">公告</a>
            </li>
            <li>
              <a href="">課程</a>
            </li>
            <li>
              <a href="">活動</a>
            </li>
          </ul>
        </div>

        <div className="news-Month news-NotoSerifTC">
          
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">月份篩選</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

        </div>
      </div>
    </>
  )
}

export default NewsCategory
