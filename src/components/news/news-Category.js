import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';



function NewsCategory(props) {
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

        <div className="news-Dropdown news-NotoSerifTC news-DropdownNews">
          {['News類型'].map(
            (variant) => (
              <>
                <DropdownButton
                  as={ButtonGroup}
                  key={variant}
                  id={`dropdown-variants-${variant}`}
                  variant={variant.toLowerCase()}
                  title={variant}
                >
                  <Dropdown.Item  eventKey="" active>全部</Dropdown.Item>
                  <Dropdown.Item eventKey="P">公告</Dropdown.Item>
                  <Dropdown.Item eventKey="C">課程</Dropdown.Item>
                  <Dropdown.Item eventKey="A">活動</Dropdown.Item>
                </DropdownButton>{' '}
              </>
            )
          )}
        </div>

        <div className="news-Dropdown news-NotoSerifTC">
          {/* <button type="button" className="news-DropdownBtn">
            月份篩選&nbsp;&nbsp;<i class="fas fa-sort"></i>
          </button> */}
          {['月份篩選'].map(
            (variant) => (
              <>
                <DropdownButton
                  as={ButtonGroup}
                  key={variant}
                  id={`dropdown-variants-${variant}`}
                  variant={variant.toLowerCase()}
                  title={variant}
                >
                  <Dropdown.Item  eventKey="Jan" active>一月 ( January )</Dropdown.Item>
                  <Dropdown.Item eventKey="Feb">二月 ( February )</Dropdown.Item>
                  <Dropdown.Item eventKey="Mar">三月 ( March )</Dropdown.Item>
                  <Dropdown.Item eventKey="Apr">四月 ( April )</Dropdown.Item>
                  <Dropdown.Item eventKey="May">五月 ( May )</Dropdown.Item>
                  <Dropdown.Item eventKey="Jun">六月 ( June )</Dropdown.Item>
                  <Dropdown.Item eventKey="Jul">七月 ( July )</Dropdown.Item>
                  <Dropdown.Item eventKey="Aug">八月 ( August )</Dropdown.Item>
                  <Dropdown.Item eventKey="Sep">九月 ( September )</Dropdown.Item>
                  <Dropdown.Item eventKey="Oct">十月 ( October )</Dropdown.Item>
                  <Dropdown.Item eventKey="Nov">十一月 ( November )</Dropdown.Item>
                  <Dropdown.Item eventKey="Dec">十二月 ( December )</Dropdown.Item>
                </DropdownButton>{' '}
              </>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default NewsCategory
