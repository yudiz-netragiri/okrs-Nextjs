import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_ARTICLE } from './graphql/api'

function index () {
  const { data } = useQuery(GET_ALL_ARTICLE)
  console.log('data', data)

  return (
    <div className="main-content">
      <div className="container mt-3">
        {data?.getHomePageArticle?.aResults?.map((i, index) => {
          return (
            <div key={index}>
              <div className="container row">
                <div className="col-8 mx-auto">
                  <div className="text-center">
              <h5 className="text-center">{i.sName}</h5>
                    <img
                      className="main-Img"
                      src={`https://crictracker-admin-panel-local-dev-08032022.s3.ap-south-1.amazonaws.com/${
                        i.aArticle.find((mainArt) => mainArt.sType === 'nBig')
                          .oImg.sUrl
                      }`}
                    />
                  </div>
                    <h5>
                      {
                        i.aArticle.find((mainArt) => mainArt.sType === 'nBig')
                          .sTitle
                      }
                    </h5>
                    <div className='row'>
                <div className='col-4'>asfasdjkfldks</div>
                <div className='col-8'>asfasdjkfldks</div>
                </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default index
