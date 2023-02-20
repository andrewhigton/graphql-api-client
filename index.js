import { ApolloServer } from 'apollo-server'; 
// import { composeWithJson } from 'graphql-compose-json';
import express from 'express'; 
import nodemon from 'nodemon';
import { gql } from 'apollo-server';
import { typeDefs } from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';
import EqualsMoneyAPI from './models/dataSources.js';
// import EqualsApiQuery from "./graphql/datasources.js";
// import Person from "./graphql/datasources.js";
// import { RESTDataSource } from "@apollo/datasource-rest";


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    accountsData: new EqualsMoneyAPI("https://sandbox.equals.co/api/")  
  })
});


  server.listen({ port: 5000 }, () => {
    console.log(
      `🚀 Server is running on 5000`
    );
  });








// const typeDefs = gql`
//   type Query {
//     findAll: FindResults!
//     findAllByPage(page: Int): FindResults!
//     findByName(name: String): FindResults!
//     health: String
//   }

//   type FindResults {
//     count: Int
//     next: String
//     previous: String
//     results: [Person]
//   }

//   type Person {
//     name: String
//     height: String
//     mass: String
//     gender: String
//     homeworld: String
//   }
// `;

// const resolvers = {
//   Query: {
//     findAll: (_, __, { dataSources }) => dataSources.person.findAll(),
//     findAllByPage: (_, { page }, { dataSources }) => dataSources.person.findAllByPage({ page }),
//     findByName: (_, { name }, { dataSources }) => dataSources.person.findByName({ name }),
//     health: () => "API is healthy"
//   }
// };


// class Person extends RESTDataSource {
//   constructor(baseUrl) {
//     super();
//     this.baseURL = baseUrl;
//   }

//   async findAll() {
//     const swapiResponse = await this.get("people");
// console.log('resp1 ', swapiResponse);
//     if (Array.isArray(swapiResponse.results)) {
//       swapiResponse.results = swapiResponse.results.map((person) =>
//         this.toPerson(person)
//       );
//       console.log('resp2 ', swapiResponse);
//       return swapiResponse;
//     }
//     return [];
//   }

//   async findAllByPage({ page }) {
//     const swapiResponse = await this.get("people/", { page });

//     if (Array.isArray(swapiResponse.results)) {
//       swapiResponse.results = swapiResponse.results.map((person) =>
//         this.toPerson(person)
//       );
//       return swapiResponse;
//     }
//     return [];
//   }

//   async findByName({ name }) {
//     const swapiResponse = await this.get("people/", { search: name });
//     if (Array.isArray(swapiResponse.results)) {
//       swapiResponse.results = swapiResponse.results.map((person) =>
//         this.toPerson(person)
//       );
//       return swapiResponse;
//     }
//     return [];
//   }

//   toPerson(person) {
//     return {
//       name: person.name,
//       height: person.height,
//       mass: person.mass,
//       gender: person.gender,
//       homeworld: person.homeworld
//     };
//   }
// }

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   dataSources: () => ({
//     person: new Person("https://swapi.dev/api/")
//   })
// });

//   