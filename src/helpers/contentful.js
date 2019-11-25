/**
 * @param Object
 * @desc Contentful configuration 
 */
const config =  {
  development: {
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.PREVIEW_ACCESS_TOKEN,
      // environment: 'staging',
      host: "preview.contentful.com"
  },
  production: {
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.ACCESS_TOKEN,
      // environment: 'staging',
      host: "cdn.contentful.com"
  }
}[process.env.NODE_ENV];

const contentful = require("contentful");
const client = contentful.createClient(config);

export const getEntries = async function(id) {
  try {
    const entry = await client.getEntries({
      content_type: "page",
      "fields.slug": id,
      include: 10
    });

    return reduceEntity(entry.items[0]);
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
