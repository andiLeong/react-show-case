//
import { useEffect } from 'react';
function useAppendScriptTag(url, fn = null) {
    useEffect(() => {
        const script = document.createElement('script');
        if (fn !== null) {
            script.onload = () => fn();
        }

        script.src = url;
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
}
export default useAppendScriptTag;
