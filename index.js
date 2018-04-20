const createApp = require('./create-app');

const app = createApp();

app.listen(process.env.PORT, () => {
  console.log(
    'Listening on 3000! GitHub: https://github.com/mstrieleman/continuous-delivery'
  );
});
