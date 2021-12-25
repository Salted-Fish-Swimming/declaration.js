export class Event {

  constructor () {
    this.events = {};
    this.middle = [];
  }

  on (type, fn) {
    const callbacks =
      (this.events[type] ?? (this.events[type] = []))
    callbacks.push(fn);
    return true;
  }

  off (type, fn) {
    if (this.events[type]) {
      const callbacks = this.events[type];
      const index = callbacks.findIndex(f => fn === f);
      if (index >= 0) {
        callbacks.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  emit (type, value) {
    const callbacks = this.events[type];
    if (callbacks) {
      for (const cb of callbacks) {
        cb(value);
      }
    } else {
      return true;
    }
  }

  use (fn) {
    this.middle.push(fn);
  }

  onUse (fn) {
    const index = this.middle.findIndex(f => fn === f);
    if (index >= 0) {
      this.middle.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  trigger (value) {
    for (const fn of this.middle) {
      fn(value);
    };
  }

}

