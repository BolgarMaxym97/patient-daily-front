import {NotificationManager} from 'react-notifications';
const noty = {
    show: (type, message) => {
        return NotificationManager[type](message, false, 3000);
    }
};
export default noty;
