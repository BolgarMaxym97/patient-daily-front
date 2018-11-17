import noty from './helpers/notifications';

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
                return noty.show('error', 'Неправильно заполнены данные')
            }
            this._set('user', data);
            return this._set('auth', true);
        }

        return this._get('user');
    },
    auth()
    {
        return this._get('auth');
    },
    drop(name) {
        return localStorage.removeItem(name);
    },
    flush() {
        return localStorage.clear();
    }
};

export default Storage;