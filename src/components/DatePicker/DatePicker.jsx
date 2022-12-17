import React from "react";
import { DatePicker as MantineDatePicker } from "@mantine/dates";
import styled from "styled-components";
import dayjs from "dayjs";

const SDatePicker = styled(MantineDatePicker)`
  .mantine-DatePicker-input {
    width: 300px;
  }
  .mantine-DatePicker-root {
    background-color: #fff;
  }
`;

const maxDate = dayjs(new Date()).subtract(18, 'year').toDate();

export const DatePicker = () => {
  return <SDatePicker maxDate={maxDate} defaultValue={maxDate} />;
};
