// preload.js
(() => {
    // 拦截 document.cookie 的 get 和 set
    Object.defineProperty(document, 'cookie', {
        configurable: false,
        enumerable: false,
        get: function () {
            console.log('Intercepting document.cookie get');
            const cookies = {};
            const cookieStr = localStorage.getItem('__fake_cookie__') || '';
            cookieStr.split('; ').forEach(pair => {
                const [key, value] = pair.split('=');
                if (key) cookies[key] = decodeURIComponent(value || '');
            });
            return Object.entries(cookies)
                .map(([k, v]) => `${k}=${v}`)
                .join('; ');
        },
        set: function (value) {
            console.log('Intercepting document.cookie set:', value);
            const cookieStr = localStorage.getItem('__fake_cookie__') || '';
            const cookies = cookieStr.split('; ').reduce((acc, pair) => {
                const [key, val] = pair.split('=');
                if (key) acc[key] = val ? decodeURIComponent(val) : '';
                return acc;
            }, {});

            const [keyValue] = value.split(';').map(s => s.trim());
            const [key, val] = keyValue.split('=');
            if (key) {
                cookies[key.trim()] = decodeURIComponent(val.trim() || '');
            }

            const newCookieStr = Object.entries(cookies)
                .map(([k, v]) => `${k}=${v}`)
                .join('; ');

            localStorage.setItem('__fake_cookie__', newCookieStr);
            return true;
        }
    });
})();
