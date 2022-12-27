import { gql } from '@apollo/client'

export const GET_ALL_HEADERDATA = gql`
query ExampleQuery {
    getMenuTree {
      aResults {
        bIsMulti
        eMenuType
        eUrlTarget
        nSort
        sSlug
        sTitle
      }
    }
  }
`
export const GET_ALL_FOOTERDATA = gql`
query ExampleQuery {
 
    getFrontFooter {
      _id
      eType
      aResults {
        _id
        sUrl
      }
    }
  }
`

export const GET_ALL_ARTICLE = gql`
query GetHomePageArticle {
  getHomePageArticle {
    aResults {
      sName
      aArticle {
        sTitle
        sSubtitle
        oImg {
          sUrl
          sText
          sCaption
          sAttribute
        }
        dPublishDate
        dPublishDisplayDate
        sType
        nDuration
      }
    }
  }
}`
