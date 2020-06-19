import React from 'react'


class VideoList extends React.Component{
    render(){
    return(
        <div className="video-list-page">
            <h3 className="video-list-title">影片列表</h3>
                <form className="video-list-search">
                <input type="text" className="video-list-input"/>
                <button className="video-list-search-btn">搜尋</button>
                <p>請輸入關鍵字</p>
                </form>
            <div className="video-list-features">
                <div>
                    <input type="checkbox"/>全選
                    <a href="">刪除</a>
                    <a href="">上架</a>
                    <a href="">下架</a>
                </div>
                <div className="video-list-add">
                    <button>新增影片</button>
                </div>
                <hr />
            </div>
            <div className="video-list-content">
                <div className="video-list-pro-content">
                    <div className="video-list-pro-state">
                        <p className="video-list-left-text">商品編號 : 95279527</p>
                        <p className="video-list-right-text">商品狀態 : 上架中</p>
                    </div>
                    <hr/>
                    <div className="video-list-pro">
                    <input type="checkbox" className="video-list-pro-checkbox"/>
                        <img></img>
                        <div className="video-list-pro-text">
                            <h3>從0開始學習吉他</h3>
                            <p>類別 : 吉他</p>
                            <p>長度 : 90分鐘</p>
                            <p>編輯時間 : 2020/06/16</p>
                            <span className="video-list-pro-money">價格</span>
                            <span className="video-list-pro-money">$999</span>
                        </div>
                        <div className="video-list-pro-btns">
                            <button>上架</button>
                            <button>下架</button>
                            <button>刪除</button>
                        </div>
                    </div>
                </div>
                <hr className="video-list-over-line"/>
            </div>
            
            <div className="video-list-content">
                <div className="video-list-pro-content">
                    <div className="video-list-pro-state">
                        <p className="video-list-left-text">商品編號 : 95279527</p>
                        <p className="video-list-right-text">商品狀態 : 上架中</p>
                    </div>
                    <hr/>
                    <div className="video-list-pro">
                    <input type="checkbox" className="video-list-pro-checkbox"/>
                        <img></img>
                        <div className="video-list-pro-text">
                            <h3>從0開始學習吉他</h3>
                            <p>類別 : 吉他</p>
                            <p>長度 : 90分鐘</p>
                            <p>編輯時間 : 2020/06/16</p>
                            <span className="video-list-pro-money">價格</span>
                            <span className="video-list-pro-money">$999</span>
                        </div>
                        <div className="video-list-pro-btns">
                            <button>上架</button>
                            <button>下架</button>
                            <button>刪除</button>
                        </div>
                    </div>
                </div>
                <hr className="video-list-over-line"/>
            </div>
            
        </div>
    )
    }
}

export default VideoList