import React from 'react'
import '../../../style/Forum.scss'

function AnyQuestion() {
  return (
    <>
      <div className="text"></div>
      <div className="AnyQuestionContainer">
        <h2 className="AnyQuestionH2">常見問題</h2>
        <div className="AnyQuestionCardFlex">
          <div className="AnyQuestionCard AnyQuestionCardLeft">
            <i className="far fa-user AnyQuestionCardIcon"></i>
            <h2 className="AnyQuestionCardIconH2">會員問題</h2>
          </div>
          <div className="AnyQuestionCard">
            <i class="fas fa-book AnyQuestionCardIcon"></i>
            <h2 className="AnyQuestionCardIconH2">課程問題</h2>
          </div>
          <div className="AnyQuestionCard">
            <i class="fas fa-video AnyQuestionCardIcon"></i>
            <h2 className="AnyQuestionCardIconH2">影片問題</h2>
          </div>
          <div className="AnyQuestionCard">
            <i class="far fa-building AnyQuestionCardIcon"></i>
            <h2 className="AnyQuestionCardIconH2">廠商問題</h2>
          </div>
          <div className="AnyQuestionCard AnyQuestionCardRight ">
            <i class="fas fa-search AnyQuestionCardIcon"></i>
            <h2 className="AnyQuestionCardIconH2">其他問題</h2>
          </div>
        </div>
        <div className="AnyQuestion2Flex">
          <div className="AnyQuestion2Width">
            <h3 className="AnyQuestionNorthH3">北部上課地點</h3>
            <p>營業時間：平日09:00-22:00/六日09:00-1800 </p>
            <p>電 話：(02)2222-2222</p>
            <p>地 址：台北市南港區忠孝東路八段100巷</p>
          </div>
          <div className="AnyQuestion2Width">
            <h3 className="AnyQuestionNorthH3">南部上課地點</h3>
            <p>營業時間：平日09:00-22:00/六日09:00-1800 </p>
            <p>電 話：(02)2222-2222</p>
            <p>地 址：台北市南港區忠孝東路八段100巷</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnyQuestion
