import React from 'react'


class VideoList extends React.Component{
    render(){
    return(
        <div className="video-list-page">
            <h3 className="video-list-title font-size-142rem">影片列表</h3>
                <form className="video-list-search">
                    <label className="video-list-search-label">
                        <input type="text" className="video-list-inp" placeholder="請輸入關鍵字"/>
                        <p>請輸入關鍵字</p>
                        <button type="submit" className="video-list-search-btn">送出</button>
                    </label>
                </form>
                <hr className="video-list-hr"/>
                <button className="video-list-add-btn">新增影片</button>
                <div className="video-list-tools">
                    <div className="video-list-option">
                        <input type="checkbox" className="video-list-tool-chk"/>
                        <p>全選</p>
                        <a href="">刪除</a>
                        <a href="">上架</a>
                        <a href="">下架</a>
                    </div>
                    <button className="video-list-tool-btn">新增影片</button>
                </div>
                <form className="video-list-product">
                    <div className="video-list-state">
                        <p className="font-size-185rem">商品編號 : 95279527</p>
                        <p className="font-size-185rem">商品狀態 : 上架中</p>
                    </div>
                    <div className="video-list-content">
                        <input type="checkbox" className="video-list-content-chk"/>
                        <div className="video-list-content-movie">
                        <video controls></video>
                        </div>
                        <div className="video-list-centent-text">
                        <h3 className="font-size-142rem">從0開始學習吉他</h3>
                            <p className="font-size-1rem">類別 : 吉他</p>
                            <p className="font-size-1rem">長度 : 90分鐘</p>
                            <p className="font-size-1rem">編輯時間 : 2020/06/16</p>
                            <span className="video-list-pro-money font-size-1rem">價格</span>
                            <span className="video-list-pro-money font-size-114rem manufacturer-color-red manufacturer-font-eg">$999</span>
                        </div>
                        <div className="video-list-content-btns">
                            <button>上架</button>
                            <button>下架</button>
                            <button>刪除</button>
                        </div>
                    </div>
                </form>
                <form className="video-list-product">
                    <div className="video-list-state">
                        <p className="font-size-185rem">商品編號 : 95279527</p>
                        <p className="font-size-185rem">商品狀態 : 上架中</p>
                    </div>
                    <div className="video-list-content">
                        <input type="checkbox" className="video-list-content-chk"/>
                        <div className="video-list-content-movie">
                        <video controls></video>
                        </div>
                        <div className="video-list-centent-text">
                        <h3 className="font-size-142rem">從0開始學習吉他</h3>
                            <p className="font-size-1rem">類別 : 吉他</p>
                            <p className="font-size-1rem">長度 : 90分鐘</p>
                            <p className="font-size-1rem">編輯時間 : 2020/06/16</p>
                            <span className="video-list-pro-money font-size-1rem">價格</span>
                            <span className="video-list-pro-money font-size-114rem manufacturer-color-red manufacturer-font-eg">$999</span>
                        </div>
                        <div className="video-list-content-btns">
                            <button>上架</button>
                            <button>下架</button>
                            <button>刪除</button>
                        </div>
                    </div>
                </form>
                <div className="video-page">
                    <a className="video-page-Rarrow">
                    <i className="fas fa-sort-up"></i>
                    </a>
                    <button className="video-page-number">1</button>
                    <button className="video-page-number">2</button>
                    <button className="video-page-number">3</button>
                    <button className="video-page-number">4</button>
                    <button className="video-page-x">...</button>
                    <a className="video-page-Larrow">
                    <i className="fas fa-sort-up"></i>
                    </a>
                </div>
                <div className="videoRwd-page-dropdown ">
            <button type="button" className="videoRwd-page-dropbtn">
              頁數
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="videoRwd-page-dropdown-content">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
            </div>
          </div>
        </div>
    )
    }
}

export default VideoList