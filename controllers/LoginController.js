function authUser(req,res) {
  let user = req.body;
  console.log(user);
  if (user.user === 'yahir' && user.password === 'admin123') {
    let tokenData = { user : user.user }
    let token = jwt.sign(tokenData,'Secret Hash',{
      expiresIn: 60 * 60 * 24
    })
    res.send({token})
  }else {
    res.status(401).send({error:'Usuario Invalido'})
  }
}


module.exports = {
  authUser
};
