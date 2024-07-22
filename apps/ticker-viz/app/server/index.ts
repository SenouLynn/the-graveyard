import tickerRouter from "./sql/ticker";
import govStreamsRouter from "./streams/gov";
export { tickerRouter };

export const streams = {
  gov: govStreamsRouter,
};
