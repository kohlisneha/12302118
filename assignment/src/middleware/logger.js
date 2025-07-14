import { sendLog } from '../LoggingMiddleware/log';

export const recordLogEvent = async (severity, moduleName, logMessage) => {
  try {
    await sendLog("frontend", severity, moduleName, logMessage);
  } catch (error) {
    console.error("Failed to record log event:", error.message);
  }
};
