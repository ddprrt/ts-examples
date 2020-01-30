type User = string | number | { name: string }

function createUserId(user: User): string {
  if(typeof user === 'string') {
    return user.toUpperCase()
  } else if(typeof user === 'number') {
    return user.toString().toUpperCase()
  } else {
    return user.name.toUpperCase()
  }
  return '';
}

createUserId({name: 'Stefan'})
