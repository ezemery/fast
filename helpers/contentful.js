/**
 * @param Object
 * @desc Contentful configuration 
 */
const config =  {
  development: {
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.REACT_APP_SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.REACT_APP_PREVIEW_ACCESS_TOKEN,
      // environment: 'staging',
      host: "preview.contentful.com"
  },
  production: {
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.REACT_APP_SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      // environment: 'staging',
      host: "cdn.contentful.com"
  }
}[process.env.NODE_ENV];




const contentful = require("contentful");
const client = contentful.createClient(config);

export const getEntries = async (id) => {
  try {
    const res = await client.getEntries({
      content_type: "page",
      "fields.slug": id,
      include: 10
    });
    return new Promise(function(resolve) {
      resolve(reduceEntity(res.items[0]))
    })
  } catch (error) {
    return error;
  }
};

export const reduceEntity = (entity) => {
  const { sys, fields } = entity;
  let contentType;
  if (sys && sys.contentType) {
    const {
      contentType: {
        sys: { id }
      }
    } = sys;
    contentType = id;
  }
  return {
    contentType,
    ...(fields
      ? Object.keys(fields).reduce((accum, key) => {
          if (typeof fields[key] === "object") {
            // check if entity or asset
            if (Array.isArray(fields[key])) {
              accum[key] = fields[key].map(reduceEntity);
            } else {
              accum[key] = reduceEntity(fields[key]);
            }
          } else {
            accum[key] = fields[key];
          }
          return accum;
        }, {})
      : entity)
  };
};

export const reduceModules = (modules) => {
  
  return modules && modules.reduce((accum, curr) => {
    if(curr.moduleType) {
      accum[curr.moduleType]= curr;
    }
    return accum
  }, {})
}