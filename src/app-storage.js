const Storage = {
    _set(name, obj) {
        this.drop(name);
        if (!name || typeof name !== 'string' || typeof name === 'undefined') {
            throw new Error('Storage value name should be a string');
        }
        return localStorage.setItem(name, JSON.stringify(obj));
    },
    _get(name) {
        return JSON.parse(localStorage.getItem(name));
    },
    value(name, data) {
        if (data !== null && typeof data !== 'undefined') {
            return this._set(name, data);
        }
        return this._get(name);
    },
    user(data) {
        if (data !== null && typeof data !== 'undefined' && typeof data !== 'string') {
            if (typeof data !== 'object' || Object.keys(data).length === 0) {
                throw new TypeError('User data type should be NOT EMPTY AND be an object!!!');
            }
            return this._set('user', data);
        }

        return this._get('user');
    },
    drop(name) {
        return localStorage.removeItem(name);
    },
    flush() {
        return localStorage.clear();
    }
};

export default Storage;