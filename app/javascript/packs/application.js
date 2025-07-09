import "../stylesheets/application.scss";
import "../src/common/i18n";
import ReactRailsUJS from "react_ujs";
import App from "../src/App";

import initializeAxios from "../src/apis/axios";
import { initializeLogger } from "common/logger";

initializeLogger();
initializeAxios();

const componentsContext = { App };
ReactRailsUJS.getConstructor = name => {
  return componentsContext[name];
};
