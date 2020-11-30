const API_URL = "https://huawei.raccoon-stage.com/graphql/";

export async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }
  
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables })
    });

    const json = await res.json()
    if (json.errors) {
      console.log(json.errors)
      console.log('error details', query, variables)
      throw new Error('Failed to fetch API')
    }

    return json.data
}

export async function getAllPosts() {
    const data = await fetchAPI(`
        query allPosts {
            posts(where: {status: PUBLISH}) {
                edges {
                    node {
                        id
                        date
                        title
                        slug
                      }
                }
            }
        }
   `)
  
    return data?.posts;
}

export async function getHome(slug) {
    const data = await fetchAPI(`
    query getHome {
        pages(where: {name: "Home"}) {
            nodes {
              id
              settingsHome {
                fieldGroupName
                homeHeroShow
                homePopularPostsDescription
                homePopularPostsShow
                homePopularPostsTitle
                homeRecentDescription
                homeRecentShow
                homeRecentTitle
                homeHeroRepeater {
                  homeHeroPost {
                    ... on Post {
                      id
                      date
                      link
                      title
                      featuredImage {
                        node {
                          mediaItemUrl
                        }
                      }
                      categories(first: 1) {
                        nodes {
                          link
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }      
    `)
    return data
}

export async function getRecentsPosts() {
    const data = await fetchAPI(
      `
      query RecentsPosts {
        posts(first: 4, where: { orderby: { field: DATE, order: DESC}}) {
            edges {
              node {
                id
                date
                title
                link
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
                categories(first: 1) {
                  nodes {
                    link
                    name
                  }
                }
              }
            }
          }
      }
      `
    );
  
    return data?.posts;
  }