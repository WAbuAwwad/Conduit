export function fetchArticles(page: number) {
  var offset;
  if (page > 0) offset = page * 10 - 10;
  else offset = 0;

  return fetch(
    "https://conduit.productionready.io/api/articles?limit=10&offset=" + offset
  )
    .then(res => res.json())
    .then(data => {
      return data.articles.map((item: any) => {
        return {
          username: item.author.username,
          date: item.createdAt,
          image: item.author.image,
          title: item.title,
          desc: item.description,
          favCount: item.favoritesCount,
          fav: item.favorited,
          tags: item.tagList,
          key: item.slug
        };
      });
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
}
export function fetchTags() {
  return fetch("https://conduit.productionready.io/api/tags")
    .then(res => res.json())
    .then(data => {
      return data.tags;
    })
    .catch(function() {
      console.log("Error in fetching tags");
    });
}

export function changeTag(tag: string) {
  return fetch(
    "https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=" +
      tag
  )
    .then(res => res.json())
    .then(data => {
      return data.articles.map((item: any) => {
        return {
          username: item.author.username,
          date: item.createdAt,
          image: item.author.image,
          title: item.title,
          desc: item.description,
          favCount: item.favoritesCount,
          fav: item.favorited,
          tags: item.tagList,
          key: item.slug
        };
      });
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
}

export function fetchFeedArticles(page: number, token: string) {
  var offset;
  if (page > 0) offset = page * 10 - 10;
  else offset = 0;
  return fetch(
    "https://conduit.productionready.io/api/articles/feed?limit=10&offset=" +
      offset,
    {
      headers: {
        Authorization: "Token " + token
      },
      credentials: "include"
    }
  )
    .then(res => res.json())
    .then(data => {
      return data.articles.map((item: any) => {
        return {
          username: item.author.username,
          date: item.createdAt,
          image: item.author.image,
          title: item.title,
          desc: item.description,
          favCount: item.favoritesCount,
          fav: item.favorited,
          tags: item.tagList,
          key: item.slug
        };
      });
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
}
