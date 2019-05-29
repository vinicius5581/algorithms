function pubSub() {
    const events = new Map();
    function sub(name,cb) {
        events.set(name, (events.get(name) || new Set()).add(cb));
        return ()=>events.get(name).delete(cb);
    };

    return {
        sub,
        emit: (name,...args)=>{
            events.has(name) && events.get(name).forEach(cb=>cb(...args));
        },
        once: (name,cb)=>{
            let unsub;
            const newcb = (...args) => {
                unsub();
                cb(...args);
            }
            return unsub = sub(name, newcb);
        }
    };
}
