import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserSideBar extends Component {
  render(props) {
    const productTitleId = this.props.productTitleId
    return (
      <>
        <div className="product-sideBar">
          <ul className="product-sidebar-menu list-unstyled content">
            <Link
              to={`/${productTitleId}/piano`}
              href=""
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              鋼琴
              <div className="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/keyboard`}
              href=""
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              電子琴
              <div className="product-sidebar-menu-li-right"></div>
            </Link>

            <Link
              to={`/${productTitleId}/violin`}
              href=""
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              小提琴
              <div className="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/viola`}
              href=""
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              中提琴
              <div className="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/cello`}
              href=""
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              大提琴
              <div className="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/ukulele`}
              href=""
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              烏克麗麗
              <div className="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/flute`}
              href=""
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              長笛
              <div className="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/saxophone`}
              href=""
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              薩克斯風
              <div className="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/jazzdrum`}
              href=""
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              爵士鼓
              <div className="product-sidebar-menu-li-right"></div>
            </Link>
          </ul>
        </div>
      </>
    )
  }
}
