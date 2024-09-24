import React from 'react'
import './MyWork.css'
import theme from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h2>My Works</h2>
            <img src={theme} alt="" />
        </div>


        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow} alt="" />
        </div>
      

    </div>
  )
}

export default MyWork
