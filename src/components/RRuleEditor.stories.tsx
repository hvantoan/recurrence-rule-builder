import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import RRuleEditor from "./RRuleEditor";

import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "RRuleEditor",
  component: RRuleEditor,
} as Meta<typeof RRuleEditor>;
const Template: StoryFn<typeof RRuleEditor> = (args) => {
  const [rrule, setRRule] = useState<string>("");
  return (
    <>
      <div className="d-grid gap-4">
        <RRuleEditor {...args} value={rrule} onChange={(value) => setRRule(value)} />
        <input aria-label="RRuleString" className="form-control" value={rrule} disabled />
      </div>
    </>
  );
};
export const Primary = Template.bind({});
Primary.args = {
  id: "RRuleEditor",
  // translations: trans.vietnamese,
  config: {
    hideStart: false,
    hideEnd: false,
    hideError: false,
    weekStartsOnSunday: false,
    formatStart: "DD/MM/YYYY HH:mm",
    formatEnd: "DD/MM/YYYY HH:mm",
    initialStartDate: new Date().toString(), //
  },
};
