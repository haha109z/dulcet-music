import React ,{ Fragment, useState, useEffect } from 'react';

function CartDeliverInfo (props) {
  const { user, setUser } = props.allProps;  
  // console.log(user)
  const [checkstate, setcheckstate] = useState(false);

  const checkcallback =(e) =>{
    // console.log(e.checked)
    setcheckstate(e.checked)
  }
  // console.log(checkstate);

  useEffect(()=>{
    checkcallback(checkstate)
  },[])


    return(
        <Fragment>            
            <div className="cart-buyer-info">
                  <h2>收件人資訊</h2>
                  <fieldset>
                    <label><input type="checkbox" id="receivingInfo" onClick={(e)=>{ checkcallback(e.target) }}/> 同帳戶資料</label>
                        {checkstate ? (
                         <>
                         <div className="cart-input">
                            <label htmlFor="name">姓名</label>
                            <input id="name" type="text" name="name" value={user["username"]} />
                            {/* <input id="name" type="text" name="name" value="1111111111111" /> */}
                        </div>
                        <div className="cart-input">
                            <label htmlFor="address">地址</label>
                            <input id="address" type="text" value={user["userAddress"]} />
                        </div>
                        <div className="cart-input">
                            <label htmlFor="phone">手機號碼</label>
                            <input id="phone" type="text" value={user["userPhone"]} />
                        </div>
                        <div className="cart-input">
                            <label htmlFor="email">電子信箱</label>
                            <input id="email" type="text" value={user["userMail"]} />
                        </div>  

                         </>
                        ):(
                          <>
                          <div className="cart-input">
                          <label htmlFor="name">姓名</label>
                          <input id="name" type="text" name="name" value="" />
                        </div>
                        <div className="cart-input">
                          <label htmlFor="address">地址</label>
                          <input id="address" type="text" value="" />
                        </div>
                        <div className="cart-input">
                          <label htmlFor="phone">手機號碼</label>
                          <input id="phone" type="text" value="" />
                        </div>
                        <div className="cart-input">
                          <label htmlFor="email">電子信箱</label>
                          <input id="email" type="text" value="" />
                        </div>
                          </>
                        )}
                        
                           
                  </fieldset>
              </div>
        </Fragment>
    )
}

export default CartDeliverInfo;