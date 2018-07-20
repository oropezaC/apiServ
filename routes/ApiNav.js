let routes =[
  {name:"login",endpoint:"/login",require:"./routes/loginApi"},
  {name:"productos",endpoint:"/private/products",require:"./routes/productApi"},
  {name:"estadistica",endpoint:"/private/estadistica",require:"./routes/estadisticaApi"},
]

module.exports = routes;
