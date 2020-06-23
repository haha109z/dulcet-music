import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
}))

function NewsCategory(props) {
  const classes = useStyles()
  return (
    <>
      <div className="news-CategoryContainer d-flex news-NotoSerifTC">
        <div className="news-Category">
          <ul className="d-flex justify-content-start">
            <li>
              <a href="#">全部</a>
            </li>
            <li>
              <a href="#">公告</a>
            </li>
            <li>
              <a href="#">課程</a>
            </li>
            <li>
              <a href="#">活動</a>
            </li>
          </ul>
        </div>

        <div className="news-Month news-NotoSerifTC">
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="月份篩選"
              type="month"
              defaultValue="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default NewsCategory
