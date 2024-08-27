import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";



export const FeatureFlagsContext = createContext(null);


export default function FeatureFlagGlobalState({children}) {

    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            setLoading(true);
            const res = await featureFlagsDataServiceCall();
            setEnabledFlags(res);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
            throw new Error(e);
        }
    }


    useEffect(() => {
        fetchFeatureFlags();
    }, [])

    return <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>
        {children}
    </FeatureFlagsContext.Provider>
}