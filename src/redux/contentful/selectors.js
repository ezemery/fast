import { createSelector } from 'reselect'

const selectContentful =  state => state.contentful;

export const selectContentfulModules = createSelector([selectContentful], (data) => 
    (
        data.modules
    )
)

// export const getContents = (image) => image.contents.data;

// export const getModules = (state) => getContents(state).modules;

// export const getImage = (image) => {

//   return {
//     ...(image
//       ? Object.keys(image).reduce((accum, key) => {
//           if (typeof image[key] === "object") {
//             // check if entity or asset
//             accum[key] = getImage(image[key]);
//           } else {
//             accum[key] = image[key];
//           }
//           return accum;
//         }, {})
//       : image)
//   };
// };
