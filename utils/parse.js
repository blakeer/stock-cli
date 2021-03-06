module.exports = (code, info) => {
  if(!info) return ['', code, '', '']
  
  const arr = info.split(',')
  if(code.startsWith('sh') || code.startsWith('sz')) {
    const name = arr[0]
    const last = arr[2]
    const now = arr[3]
    const change = ((now - last) / last) * 100
    return [name, code, now, change.toFixed(2)]
  }
  if(code.startsWith('s_sh') || code.startsWith('s_sz')) {
    const name = arr[0]
    const now = arr[1]
    const change = arr[3]
    return [name, code, now, change]
  }
  if(code.startsWith('hk')) {
    const name = arr[1]
    const last = arr[3]
    const now = arr[6]
    const change = ((now - last) / last) * 100
    return [name, code, now, change.toFixed(2)]
  }
  if(code.startsWith('gb')) {
    const [name, now, change] = arr
    return [name, code, now, change]
  }
  return ['', code, '', '']
}
