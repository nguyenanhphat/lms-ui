import { useCallback, useState } from "react";
export default function useRadio(defaultValue) {
    const [selected, updateSelected] = useState(defaultValue);
    const onChange = useCallback((event) => {
        updateSelected((event.target || {}).value);
    }, [updateSelected]);
    return { selected, onChange };
}
//# sourceMappingURL=useRadio.js.map