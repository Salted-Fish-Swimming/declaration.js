import { Event } from "./util";

const Type = {
  Meta: class {},
  Data: class {},
  Array: {
    Meta: extend(null) , Data: extend(null),
  },
  Object: {
    Meta, Data,
  }
};

function createObjectMeta () {
  const all = {
    event: new Event(),
  };

  const data = new Proxy({}, {
    get (target, prop, reciever) {
      ;
    },
    set (target, prop, value, receiver) {
      ;
    },
  });

  const meta = new Proxy(() => {}, {
    get (target, prop, reciever) {
      return (cb) => {
        cb();
        all.event.on(prop, cb);
      };
    },
    set (target, prop, cb, receiver) {
      all.event.on(prop, cb);
    },
  });

  return { all, meta, data };
}

function use (src) {
  
}