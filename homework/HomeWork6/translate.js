/* 參照老師範例後,再寫出來 */
var c2e = { 人:'human',和:'and', 狗: 'dog', 貓: 'cat', 一隻: 'a', 追: 'chase', 吃: 'eat',老鼠:'rat' }

function mt (c) {
  var e = []//英文空的
  for (let i in c) {
    var cword = c[i]//讓中文放入i
    var eword = c2e[cword]
     //轉換後放入
    e.push(eword)
  }
  return e//回傳
}

var e = mt(process.argv.slice(2))
console.log(e)

/*-----------對於此程式碼可理解---------------------*/
