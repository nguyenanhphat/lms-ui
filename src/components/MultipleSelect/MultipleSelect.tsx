import { normalizeCharacter } from "@App/utils/stringHelpers";
import ChevronRight from "lms-icons/components/ChevronRight";
import Search from "lms-icons/components/Search";
import cn from "classnames";
import _find from "lodash/find";
import _isEmpty from "lodash/isEmpty";
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BackdropTypes } from "../Backdrop";
import Box from "../Box";
import Checkbox from "../Checkbox";
import Grid from "../Grid";
import Icon from "../Icon";
import Input, { InputSizes } from "../Input";
import ListItemText from "../ListItemText";
import MenuItem from "../Menu/MenuItem";
import Popover from "../Popover";
import InputAdornment from "../InputAdornment";
import { PopperPlacements } from "../Popper";
import Typography, { TypoSizes, TypoTypes, TypoWeights } from "../Typography";
import MultipleSelectInput from "./MultipleSelectInput";
import styles from "./styles.module.scss";

export interface MultipleSelectProps {
  onClose?: () => void;
  onToggle?: (value: any) => void;
  data?: Array<any>;
  disabledInput?: boolean;
  ["data-key"]?: string;
  ["data-label"]?: string;
  iconClassName?: string;
  disabled?: boolean;
  size?: InputSizes;
  defaultValues?: Array<string>;
  isShowSearchBox?: boolean;
  contentClassname?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  title?: string;
  deleteLabel?: string;
}

const defaultProps = {
  isShowSearchBox: true,
  defaultValues: [],
  data: [],
  title: "Input your title",
  deleteLabel: "Xoá",
};

const MultipleSelect: FC<MultipleSelectProps> = (props) => {
  const {
    onClose,
    onToggle,
    data,
    className,
    iconClassName,
    disabledInput = true,
    placeholder,
    disabled,
    children,
    ["data-key"]: key,
    ["data-label"]: label,
    defaultValues,
    isShowSearchBox,
    contentClassname,
    title,
    deleteLabel,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const anchorRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [options, setOptions] = useState(data);
  const [value, setValue] = useState<Array<string>>(defaultValues);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setValue(defaultValues);
  }, [defaultValues]);

  const _showDropdownList = () => {
    setIsOpen(true);
  };

  const _hideDropdownList = () => {
    setIsOpen(false);
  };

  const handleChangeSearch = (event: any) => {
    setSearchText(event.target.value);
  };

  const classnamesOfIcon = cn(
    iconClassName,
    styles["icon"],
    {
      [styles["icon-open"]]: isOpen,
    },
    styles[`dropdown-addon-size-${rest.size}`]
  );
  const afterInput = useMemo(
    () => (
      <InputAdornment>
        <Icon
          onClick={_showDropdownList}
          className={classnamesOfIcon}
          component={ChevronRight}
        />
      </InputAdornment>
    ),
    [isOpen, disabled]
  );

  const _handleToggle = (e, key: string) => {
    e.preventDefault();
    const newValue =
      value && value.indexOf(key) !== -1
        ? value.filter((x) => x !== key)
        : value.concat([key]);
    setValue(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  const _isChecked = useCallback(
    (item: string) => {
      return !!value && value.indexOf(item) !== -1;
    },
    [value]
  );

  const _handleClear = () => {
    if (!_isEmpty(value)) {
      const newValue = [];
      setValue(newValue);
      if (onToggle) {
        onToggle(newValue);
      }
    }
  };

  useEffect(() => {
    if (searchText) {
      const optionFilter = data.filter((option) => {
        return normalizeCharacter(option[label].toLowerCase()).startsWith(
          searchText.toLowerCase()
        );
      });
      setOptions(optionFilter);
    } else {
      setOptions(data);
    }
  }, [searchText, data]);

  let display: string | string[] | any = placeholder;
  const hasValues = !_isEmpty(value);
  if (hasValues) {
    if (value.length > 1) {
      display = `${value.length} lựa chọn`;
    } else if (value.length === 1) {
      const name = value[0];
      const item = _find(
        data,
        (x: { [key: string]: string }) => x[key] === name
      );
      if (item) {
        display = item[label];
      }
    }
  }

  const classOfRoot = cn(className, styles["root"]);
  return (
    <div ref={anchorRef} className={classOfRoot}>
      <Input
        className={cn(
          styles.input,
          { [styles["is-open"]]: isOpen },
          {
            [styles["has-values"]]: hasValues,
          }
        )}
        onClick={_showDropdownList}
        onClickAfterInput={_showDropdownList}
        component={MultipleSelectInput}
        afterInput={afterInput}
        readOnly={disabledInput}
        display={display}
        disabled={disabled}
        {...rest}
      />
      {isOpen && (
        <Popover
          anchorRef={anchorRef}
          backdrop={BackdropTypes.transparent}
          placement={PopperPlacements.bottomStart}
          onClose={_hideDropdownList}
          className={styles.popover}
        >
          <Grid container direction="column">
            <Grid item xs={12}>
              <Box px={4} pt={2}>
                <Grid
                  container
                  alignItem="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    <Typography weight={TypoWeights.bold}>{title}</Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      className={styles["btn-clear"]}
                      size={TypoSizes.caption}
                      type={TypoTypes.link}
                      onClick={_handleClear}
                    >
                      {deleteLabel}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {isShowSearchBox && (
              <Grid item xs={12}>
                <Box px={4} py={2}>
                  <Input
                    name="search"
                    autoComplete="off"
                    value={searchText}
                    onChange={handleChangeSearch}
                    placeholder={placeholder}
                    afterInput={
                      <InputAdornment>
                        <Icon component={Search} width={24} height={24} />
                      </InputAdornment>
                    }
                    className={styles["search-text"]}
                  />
                </Box>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              className={cn(contentClassname, styles.boxListItem)}
            >
              <Box mb={2}>
                {!!options && options.length > 0 ? (
                  (options || []).map((option, index) => (
                    <MenuItem
                      key={`${index} - ${option[key]}`}
                      onClick={(e) => _handleToggle(e, option[key])}
                      className={cn(
                        styles["item"],
                        _isChecked(option[key]) && styles.activated
                      )}
                    >
                      <Checkbox checked={_isChecked(option[key])} />
                      <ListItemText size={InputSizes.lg}>
                        {option[label]}
                      </ListItemText>
                    </MenuItem>
                  ))
                ) : (
                  <Box px={4}>
                    <Typography
                      component="div"
                      type={TypoTypes.sub}
                      className={styles.empty}
                    >
                      Không có dữ liệu
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Popover>
      )}
    </div>
  );
};

export default React.memo(MultipleSelect);
