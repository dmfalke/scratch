export const Container = value => ({
  map: fn => Container(fn(value)),
  fold: fn => fn(value)
})
