import getFetch from 'next-fetch'
const fetch = getFetch()

export default fetch

export const fetchJSON = async (url,options,req,res)=>{
  var r = await fetch(apiUrl(url,req),options,req,res)
  return r.json()
}

function apiUrl(path, req) {
  return req ? req.protocol + '://' + req.get('host') + path : path
}