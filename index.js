const jsonServer = require('json-server')
const TodoServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('todo.json')
const PORT = 3000 || process.env.PORT

TodoServer.use(middleware)
TodoServer.use(route)
TodoServer.listen(PORT,()=>{
    console.log(`Todo list port ${PORT} successfully deployed`);
})