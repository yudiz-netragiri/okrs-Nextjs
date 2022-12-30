import { useQuery } from '@apollo/client'
import Link from 'next/link'
import React from 'react'
import { GET_ALL_ARTICLE } from '../graphql/api'

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
                  <div className="text-center my-3 white-div ">
                    <h5 className="text-center">{i.sName}</h5>
                    <img
                      className="main-Img"
                      src={`https://crictracker-admin-panel-local-dev-08032022.s3.ap-south-1.amazonaws.com/${
                        i.aArticle.find((mainArt) => mainArt.sType === 'nBig')
                          .oImg.sUrl
                      }`}
                    />
                    <h5 className='text-start my-3'>
                    {
                      i.aArticle.find((mainArt) => mainArt.sType === 'nBig')
                        .sTitle
                    }
                  </h5>
                  </div>

                    {i.aArticle
                      .filter((mainArt) => mainArt.sType !== 'nBig')
                      .map((article, index) => {
                        return (<div key={index} className="row my-4 white-div ">
                            <div className="col-3 small-article-div my-2">
                              <img className='small-article' src={`https://crictracker-admin-panel-local-dev-08032022.s3.ap-south-1.amazonaws.com/${article.oImg.sUrl}`}></img>
                            </div>
                            <div className="col-9 main-div">
                            <Link href="/posts/first-post" className='article-heading'>  <h5> {article?.sTitle}</h5></Link>
                              <div className='bottom-div'><p className='date'>{article.dPublishDate}</p></div>
                              </div>
                              </div>
                        )
                      })}
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
