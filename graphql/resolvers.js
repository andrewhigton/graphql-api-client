const resolvers = {
  Query: {
    getCorpAccounts: (_, __, { dataSources }) => dataSources.accountsData.getCorpAccounts(),
    // getCorpBalances: (_, __, { dataSources }) => dataSources.accountsData.getCorpBalances(),
    // getCorpTransactions: (_, __, { dataSources }) => dataSources.accountsData.getCorpTransactions()
  }
};

export default resolvers;
