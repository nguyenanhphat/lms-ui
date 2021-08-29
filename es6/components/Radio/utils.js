import RadioSelect from 'lms-icons/components/RadioTick';
import RadioUnselect from 'lms-icons/components/RadioUntick';
import { RadioStatuses } from './types';
const mapOfIcons = {
    [RadioStatuses.unchecked]: RadioUnselect,
    [RadioStatuses.checked]: RadioSelect,
};
export const getIconByStatus = (status) => mapOfIcons[status];
export const getStatusOfRadio = (checked) => !checked ? RadioStatuses.unchecked : RadioStatuses.checked;
//# sourceMappingURL=utils.js.map