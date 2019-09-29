export default class Emitter {

  constructor (events = []) {
    this.events = new Map(events)
  }
  
  on (name, cb) {
    this.events.set(name, [...(this.events.get(name) || []), cb])
    return () => this.events.set(name, this.events.get(name).filter(fn => fn !== cb))
  }
  
  once (name, cb) {
    let unsubscribe;
    const onceCb = (...args) => {
    cb(...args)
    unsubscribe()
  }
  
  unsubscribe = this.on( name, onceCb )
    return unsubscribe
  }
  
  trigger (name, ...args) {
    return this.events.has(name) && this.events.get(name).map(fn => fn(...args))
  }
  
}

const ee = new Emitter();
const fn1 = () => console.log(1)
const fn2 = (msg) => console.log(msg)
const fn3 = (msg, msg2) => console.log(msg + msg2)
const fn4 = () => console.log('Only once')
const offOnChangeFn1 = ee.on('change', fn1)
const offOnChangeFn2 = ee.on('change', fn2)
const offOnChangeFn3 = ee.on('change', fn3)
const offOnceChangeFn4 = ee.once('change', fn4)

offOnChangeFn3()

ee.trigger('change', 'hello', ' world')
