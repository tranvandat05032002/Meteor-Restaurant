'use client'
import { useEffect } from 'react';
import { configure, start, done } from 'nprogress'; // Import nprogress
import 'nprogress/nprogress.css'; // Import CSS của nprogress

configure({ showSpinner: false });
export default function NProgress() {
    useEffect(() => {
        const handleRouteChangeStart = () => start();
        const handleRouteChangeComplete = () => done();

        window.addEventListener('popstate', handleRouteChangeComplete);

        // Bắt sự kiện thay đổi URL qua pushState và replaceState
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function (...args) {
            handleRouteChangeStart();
            originalPushState.apply(history, args);
            handleRouteChangeComplete();
        };

        history.replaceState = function (...args) {
            handleRouteChangeStart();
            originalReplaceState.apply(history, args);
            handleRouteChangeComplete();
        };

        // Hoàn tất tải trang
        window.addEventListener('load', handleRouteChangeComplete);

        return () => {
            window.removeEventListener('popstate', handleRouteChangeComplete);
            window.removeEventListener('load', handleRouteChangeComplete);
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
        };
    }, []);

    return null;
}