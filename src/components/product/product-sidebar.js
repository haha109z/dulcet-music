import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserSideBar extends Component {
  render(props) {
    const productTitleId = this.props.productTitleId
    return (
      <>
        <div class="product-sideBar">
          <ul class="product-sidebar-menu list-unstyled content">
            <Link
              to={`/${productTitleId}/piano`}
              href=""
              class="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div class="product-sidebar-menu-li-left"></div>
              鋼琴
              <div class="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/keyboard`}
              href=""
              class="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div class="product-sidebar-menu-li-left"></div>
              電子琴
              <div class="product-sidebar-menu-li-right"></div>
            </Link>

            <Link
              to={`/${productTitleId}/violin`}
              href=""
              class="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div class="product-sidebar-menu-li-left"></div>
              小提琴
              <div class="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/viola`}
              href=""
              class="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div class="product-sidebar-menu-li-left"></div>
              中提琴
              <div class="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/cello`}
              href=""
              class="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div class="product-sidebar-menu-li-left"></div>
              大提琴
              <div class="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/ukulele`}
              href=""
              class="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div class="product-sidebar-menu-li-left"></div>
              烏克麗麗
              <div class="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/flute`}
              href=""
              class="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div class="product-sidebar-menu-li-left"></div>
              長笛
              <div class="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/saxophone`}
              href=""
              class="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div class="product-sidebar-menu-li-left"></div>
              薩克斯風
              <div class="product-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to={`/${productTitleId}/jazzdrum`}
              href=""
              class="product-sidebar-menu-li font-size-142rem product-font-ch"
            >
              <div class="product-sidebar-menu-li-left"></div>
              爵士鼓
              <div class="product-sidebar-menu-li-right"></div>
            </Link>
          </ul>
        </div>
      </>
    )
  }
}
