import gql from 'graphql-tag'

export const allTechProjects = gql`
  query allTechProjects {
    allTechProjects {
      title
      position
      description
      siteURL
      githubURL
      technologies {
        icon {
          url
        }
        name
        url
      }
      images {
        url
      }
    }
  }
  `
export const allArtData = gql`
  query allArtData {
    allArtConcepts {
      name
      artConceptsRelatedTo {
        name
      }
    }
    allArtworks {
      title
      series
      concepts {
        name
        category
      }
      images {
        url
      }
      medium
      orientation
      year
    }
  }
`
