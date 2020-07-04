import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserSideBar extends Component {
  render(props) {
    const productTitleId = this.props.productTitleId
    return (
      <>
        <div className="product-sideBar">
          <ul className="product-sidebar-menu list-unstyled content">
            <a
              href={`/${productTitleId}/category/violin/1`}
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              小提琴
              <div className="product-sidebar-menu-li-right"></div>
            </a>
            <a
              href={`/${productTitleId}/category/viola/1`}
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              中提琴
              <div className="product-sidebar-menu-li-right"></div>
            </a>
            <a
              href={`/${productTitleId}/category/saxophone/1`}
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              薩克斯風
              <div className="product-sidebar-menu-li-right"></div>
            </a>

            <a
              href={`/${productTitleId}/category/piano/1`}
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              鋼琴
              <div className="product-sidebar-menu-li-right"></div>
            </a>
            <a
              href={`/${productTitleId}/category/keyboard/1`}
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              電子琴
              <div className="product-sidebar-menu-li-right"></div>
            </a>
            <a
              href={`/${productTitleId}/category/jazzdrum/1`}
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              爵士鼓
              <div className="product-sidebar-menu-li-right"></div>
            </a>

            <a
              href={`/${productTitleId}/category/guitar/1`}
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              吉他
              <div className="product-sidebar-menu-li-right"></div>
            </a>
            <a
              href={`/${productTitleId}/category/ukulele/1`}
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              烏克麗麗
              <div className="product-sidebar-menu-li-right"></div>
            </a>
            <a
              href={`/${productTitleId}/category/flute/1`}
              className="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div className="product-sidebar-menu-li-left"></div>
              長笛
              <div className="product-sidebar-menu-li-right"></div>
            </a>
          </ul>
        </div>
      </>
    )
  }
}
