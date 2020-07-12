import React ,{ Fragment } from 'react';

export default function CartInvoiceInfo (props) {

  const { 
    radiostate, 
    invoiceInfo, 
   } = props.allProps;   

  // 六元運算符
  // A == true ? A畫面 : (B == true ? B畫面 : (C == 1 ? C畫面 : (D == 1 ? D畫面 : 沒畫面 )) )

  return (

      <Fragment>

        <div className="cart-invoice">
            <h2>統一發票</h2>
                <fieldset>
                { radiostate[0] == 1 ? (
                        <Fragment>
                            <ul className="cart2-invoice-option">
                                <li className="cart2-invoice-category">存入會員載具</li>
                                <li className="cart2-invoice-value">中獎時我們會將發票寄送至您的收件地址</li>
                            </ul>
                        </Fragment> 
                        ):(
                            radiostate[1] == 1 ? (
                                <Fragment>
                                    <ul className="cart2-invoice-option">
                                        <li className="cart2-invoice-category">存入手機條碼載具</li>
                                        <li className="cart2-invoice-value cart2-rwd-value">{invoiceInfo}</li>
                                    </ul>
                                </Fragment> 
                            ):( 
                                radiostate[2] == 1 ? (
                                    <Fragment>
                                        <ul className="cart2-invoice-option">
                                            <li className="cart2-colspan2" colSpan="2">捐贈發票</li>
                                            <li className="cart2-colspan2" colSpan="2">我們將會為您捐給【{invoiceInfo}】</li>
                                            <li className="cart2-colspan2" colSpan="2">提醒您，捐贈發票後無法變更成開立或索取紙本發票。</li>
                                        </ul>
                                    </Fragment> 
                                ):(
                                    radiostate[3] == 1 ? (
                                        <Fragment>
                                            <ul className="cart2-invoice-option">
                                                <li className="cart2-colspan2" colSpan="2">開立公司戶發票</li>
                                                <li className="cart2-invoice-category">統一編號</li>
                                                <li className="cart2-invoice-value cart2-rwd-value">{invoiceInfo[0]}</li>
                                                <li className="cart2-invoice-category">發票抬頭</li>
                                                <li className="cart2-invoice-value cart2-rwd-value">{invoiceInfo[1]}</li>
                                                <li className="cart2-colspan2" colSpan="2">提醒您，公司戶發票一旦開立，不得任意更改或改為個人戶發票。</li>
                                            </ul>
                                        </Fragment> 
                                    ):( 
                                        <Fragment>
                                        </Fragment> 
                                         ) )) )
                    }

                </fieldset>
        </div>
            
      </Fragment>

  )
}