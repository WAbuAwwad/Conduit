export const fetchArticles = (page: number) => {
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
          slug: item.slug
        };
      });
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
};
export const fetchTags = () => {
  return fetch("https://conduit.productionready.io/api/tags")
    .then(res => res.json())
    .then(data => {
      return data.tags;
    })
    .catch(function() {
      console.log("Error in fetching tags");
    });
};

export const changeTag = (tag: string) => {
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
          slug: item.slug
        };
      });
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
};

export const fetchFeedArticles = (page: number) => {
  var offset;
  if (page > 0) offset = page * 10 - 10;
  else offset = 0;
  return fetch(
    "https://conduit.productionready.io/api/articles/feed?limit=10&offset=" +
      offset,
    {
      headers: {
        Authorization: "Token " + localStorage.getItem("token")
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
          slug: item.slug
        };
      });
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
};

export const checkLoggedIn = () => {
  return fetch(
    "https://conduit.productionready.io/api/user",

    {
      headers: {
        Authorization: "Token " + localStorage.getItem("token")
      },
      credentials: "include"
    }
  )
    .then(res => {
      if (res.ok) return res.json();
      else return null;
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
};

export const fetchSingleArticel = (slug: string | undefined) => {
  return fetch("https://conduit.productionready.io/api/articles/" + slug)
    .then(res => res.json())
    .then(data => {
      return {
        username: data.article.author.username,
        date: data.article.createdAt,
        image: data.article.author.image,
        favCount: data.article.favoritesCount,
        fav: data.article.favorited,
        follow: data.article.author.following,
        title: data.article.title,
        desc: data.article.description,
        body: data.article.body,
        tags: data.article.tagList
      };
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
};

export const fetchComments = (slug: string | undefined) => {
  return fetch(
    "https://conduit.productionready.io/api/articles/" + slug + "/comments"
  )
    .then(res => res.json())
    .then(data => {
      return data.comments.map((item: any) => {
        return {
          username: item.author.username,
          date: item.createdAt,
          image: item.author.image,
          body: item.body
        };
      });
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
};

export const postComment = (slug: string | undefined, body: string) => {
  const comment = {
    comment: { body: body }
  };
  return fetch(
    "https://conduit.productionready.io/api/articles/" + slug + "/comments",

    {
      method: "POST",
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(comment),
      credentials: "include"
    }
  )
    .then(res => {
      return res.ok;
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
};
