import { getFeatureFlags } from '../../utils/configuration';
import SupervisorCapacityConfig from './types/ServiceConfiguration';

const { enabled = false, rules } = (getFeatureFlags()?.features?.supervisor_capacity as SupervisorCapacityConfig) || {};

const { enabled: workerCanvasTabsEnabled = false } = getFeatureFlags()?.features?.worker_canvas_tabs || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const getRules = () => {
  return rules;
};

export const isWorkerCanvasTabsEnabled = () => {
  return workerCanvasTabsEnabled;
};
