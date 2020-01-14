const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsresolvers = require('./comments');

module.exports = {
    Post: {
        likeCount(parent){
            return parent.likes.length
        },
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsresolvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}