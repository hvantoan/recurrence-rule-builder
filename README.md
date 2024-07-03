# Recurrence Rule Builder

> A user-friendly UI library for easily creating recurrence rules using pure Bootstrap. Simplify your scheduling tasks with intuitive interfaces and seamless integration.

[![LICENSE](https://img.shields.io/npm/l/express.svg)](LICENSE)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://npm-stat.com/charts.html?package=rrule-builder)

![Screenshot](https://raw.githubusercontent.com/hvantoan/recurrence-rule-builder/main/example/public/english-recurrence-rule-builder.png)

## Description

This is a [ReactJS](http://facebook.github.io/react/index.html) project based on [Create React Library](https://github.com/UdiliaInc/create-react-library) and using [Bootstrap](https://github.com/twbs/bootstrap) styling. It's built with the help of a great [rrule.js](https://github.com/jakubroztocil/rrule) library.

This project references the [react-rrule-generator](https://www.npmjs.com/package/react-rrule-generator) package and has been upgraded to a newer version with additional features.

It also uses:

- [lodash](https://github.com/lodash/lodash)
- [moment](https://github.com/moment/moment)
- [react-datetime](https://github.com/YouCanBookMe/react-datetime)

## Demo

https://hvantoan.github.io/recurrence-rule-builder

## Installation

```bash
npm install recurrence-rule-builder@latest
```

## Usage

In your CSS index file don't forget to import styles:

```css
// this lib uses boostrap (v.5.3.3)
@import '~bootstrap/dist/css/bootstrap.css';
```

Then you're good to go.  
Just use it:

```tsx
import RRuleGenerator from "recurrence-rule-builder";

// render it as it is

const SimpleRender = () => <RRuleEditor onChange={(rrule) => console.log(`RRule changed, now it's ${rrule}`)} />;

// or with your own forms configuration

import MyCustomCalendar from "./MyCustomCalendar";

const CustomizedRender = () => (
  <RRuleEditor
    onChange={(rrule) => console.log(`RRule changed, now it's ${rrule}`)}
    config={{
      repeat: ["Monthly", "Weekly"],
      yearly: "on the",
      monthly: "on",
      end: ["Never", "On date"],
      weekStartsOnSunday: true,
      hideError: true,
    }}
    customCalendar={MyCustomCalendar}
  />
);
```

## API

### Props

| Name               | Type                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onChange**       | `function`                                | <b>REQUIRED.</b> Callback trigger when the RRule changes. The callback receives newly generated RRule `string`.                                                                                                                                                                                                                                                                                                                                                                     |
| **value**          | `string`                                  | You can pass your own RRule value to RRuleGenerator and use it like controlled input component.                                                                                                                                                                                                                                                                                                                                                                                     |
| **config**         | `object`                                  | Accepts object of what options will be rendered. This object's structure is described in [#config](#config)                                                                                                                                                                                                                                                                                                                                                                         |
| **translations**   | `function` or `object`                    | Accepts a function or an object with translations for all labels in the component. By default all labels are in English. You can pass your own translation object or function, which has the following signature: `(key: string, replacements: object) => string`. It receives key of the label in form of `'repeat.yearly.on_the'` and an object for placeholder replacements, e.g., `{ value: error.value }`. Example translation objects are placed in `/src/lib/translations/`. |
| **customCalendar** | `React Component` or `stateless function` | This accepts custom calendar / datepicker for choosing a date in EndOnDate view. It receives following props by default: <ul><li>`'aria-label'` with value `'Datetime picker for end on date'`,</li><li>`value` - date value consumed by app logic, </li><li>`dateFormat` - by default `'YYYY-MM-DD'`, </li><li>`locale` - `'en/ca'` or `'en/gb'` depending on if `weekStartsOnSunday` in config is set to `true` or `false` </li>                                                  |

<br />

### config

`config` is an object which accepts following:

| Name                   | Type                | Description                                                                                                                                                                                                                                               |
| ---------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **frequency**          | `array` of `string` | You can optionally choose if you want to show repeating options `'Yearly'`, `'Monthly'`, `'Weekly'`, `'Daily'`, `'Hourly'`. You can pass for example `['Monthly', 'Weekly']` if you want to show only options for repeating monthly and weekly.           |
| **yearly**             | `string`            | If `'on'` provided, only choosing a particular day of a month is available, if `'on the'` is provided, you have ability to choose for example 'fourth Wednesday of February'                                                                              |
| **monthly**            | `string`            | If `'on'` provided, only choosing a particular day of a month is available, if `'on the'` is provided, you have ability to choose for example 'fourth Wednesday'                                                                                          |
| **end**                | `array` of `string` | You can optionally choose if you want to show ending options `'Never'`, `'After'`, `'On date'`. You can pass for example `['Never', 'On date']` if you want to show only options for ending never or on a particular date without showint 'After' option. |
| **hideStart**          | `boolean`           | If `true` start date form is not rendered. Default: `true`                                                                                                                                                                                                |
| **hideEnd**            | `boolean`           | If `true` ending form is not rendered. Default: `false`                                                                                                                                                                                                   |
| **hideError**          | `boolean`           | If `true` error alert is not rendered. Default: `false`                                                                                                                                                                                                   |
| **weekStartsOnSunday** | `boolean`           | If set to `true`, weeks starts on Sunday (both for views and RRule string). Default: `false`                                                                                                                                                              |
| **formatStart**        | `string`            | Format display value for Start Date. Default: ``                                                                                                                                                                                                          |
| **formatEnd**          | `string`            | Format display value for End Date. Default: ``                                                                                                                                                                                                            |

## License

MIT
