import { TranslationsType } from "components/End/End.types";

export interface RepeatHourlyProps {
  id: string;
  hourly: Hourly;
  handleChange: (value: {
    // Update based on actual argument type
    interval?: number; // Optional interval property (could be added based on context)
  }) => void;
  translations: TranslationsType; // Reuse the TranslationsType from previous responses
}

export interface Hourly {
  interval: number;
}
