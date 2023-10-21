import { HTMLProps } from "react"

import { IData } from "#/Data.ts"

export interface NepaliDatePickerOptions {
  colors?: {
    primary?: IData["options"]["colors"]["primary"]
    secondary?: IData["options"]["colors"]["secondary"]
  }
  dateSeparator?: IData["options"]["dateSeparator"]
  locale?: "en" | "ne"
  valueLocale?: "en" | "ne"
  closeOnSelect?: IData["options"]["closeOnSelect"]
}

export interface INepaliDatePicker extends Omit<HTMLProps<HTMLInputElement>, "onChange" | "onSelect"> {
  value?: IData["value"]
  className?: IData["classNames"]["input"]
  wrapperClassName?: IData["classNames"]["wrapper"]
  dark?: boolean
  onChange?: IData["events"]["onChange"]
  onSelect?: IData["events"]["onSelect"]
  options?: NepaliDatePickerOptions
}

export const INepaliDatePickerKeys = [
  "value",
  "className",
  "wrapperClassName",
  "dark",
  "onChange",
  "onSelect",
  "options",
]