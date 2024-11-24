import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import {staticRouter} from './routes/static'

const app = new Koa();

// Enable body parser with default options
app.use(bodyParser());

app.use(staticRouter.routes())

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
