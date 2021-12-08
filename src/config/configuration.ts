const required = ['MONGODB_URL', 'DATABASE_NAME', 'USERS_COLLECTION'];

function checkEnv(required: string[]) {
  required.forEach((e) => {
    if (!process.env[e]) throw new Error(`Missing env ${e}`);
  });
}

export default () => {
  const { MONGODB_URL, DATABASE_NAME, USERS_COLLECTION } = process.env;
  checkEnv(required);

  return {
    mongodb: {
      url: MONGODB_URL,
    },
    database: DATABASE_NAME,
    usersCollection: USERS_COLLECTION,
  };
};
