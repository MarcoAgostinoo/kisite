import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      documentId
      title
      description
      slug
      publishedAt
      updatedAt
      cover {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;