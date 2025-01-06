import * as Sentry from "@sentry/react";

function init() {
  Sentry.init({
    dsn: "https://61c1f1dedbb1d98fd618b0fc3c3866b3@o4509916611739648.ingest.de.sentry.io/4509916723544144",
    sendDefaultPii: true,
  });
}

function log(error) {
  Sentry.captureException(error.response?.data || error.message || error);
}

export default {
  init,
  log,
};
