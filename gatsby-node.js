// use gatsby-source-filesystem to create the nodes
const { createRemoteFileNode } = require("gatsby-source-filesystem");

// get all imageNodes
exports.sourceNodes = ({
                         actions,
                         cache,
                         createNodeId,
                         getNodesByType,
                         store,
                         reporter,
                       }) => {
  const { createNode } = actions;
  const imageDownloads = [];
  const GhostPost = getNodesByType("projects");
  GhostPost.filter(( node ) => node.id !== "dummy").forEach((node) => {
    node.media.forEach((node) => {
      const imageUrl = node.url;
      // console.log(imageUrl)
      imageDownloads.push(
        createRemoteFileNode({
          url: imageUrl,
          store,
          cache,
          createNode,
          createNodeId,
          reporter,
        })
          .then((result) => {
            console.log(result)
            if (!result) {
              return reporter.warn(`Could not download ${imageUrl}`);
            }
            node.feature_image_sharp___NODE = result.id;
          })
          .catch((err) => {
            reporter.warn(err);
          })
      );
    })
  });
  return Promise.all(imageDownloads);
};
