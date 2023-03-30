// const cookieStr = ``
// const activityId = ``


function handeleStreamCookie () {
  const cookie = cookieStr.match(/Cookie: (.+)/)[1]
  const setCookieArr = cookieStr.match(/Set-Cookie: (.+)/g)
  console.log(setCookieArr);

  if (setCookieArr) {
    let cookieArr = cookie.split(';')
    let obj = {}
    cookieArr.forEach(v => {
      const [key, value] = v.split('=')
      obj[key] = value
    })

    setCookieArr.forEach(v => {
      const [key, value] = v.slice(12).split(';')[0].split('=')
      console.log(key, value);
      obj[key] = value
    })
    document.write(cookieObjToStr(obj))
  } else {
    document.write(cookie)
  }



}

function cookieObjToStr (obj) {
  let str = ''
  Object.keys(obj).forEach(v => {
    str += `${v}=${obj[v]};`
  })
  return str
}
