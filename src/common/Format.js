import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


class Format {
    static instance;

    static getInstance = () => {
        if (!Format.instance) {
            Format.instance = new Format();
        }

        return Format.instance;
    }

    timeFromNow(value) {
        return dayjs().to(dayjs(value));
    }
}

export default Format;
