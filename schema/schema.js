const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;


const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { tpye: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});