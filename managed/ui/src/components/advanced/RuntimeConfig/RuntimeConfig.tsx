import { FC } from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { YBTabsPanel } from '../../panels';
import { GlobalRuntimeConfig } from './GlobalRuntimeConfig';
import { CustomerRuntimeConfig } from './CustomerRuntimeConfig';
import { UniverseRuntimeConfig } from './UniverseRuntimeConfig';
import { ProviderRuntimeConfig } from './ProviderRuntimeConfig';

import { Action, Resource } from '../../../redesign/features/rbac';
import '../AdvancedConfig.scss';
import { RbacValidator } from '../../../redesign/features/rbac/common/RbacApiPermValidator';
import { ApiPermissionMap } from '../../../redesign/features/rbac/ApiAndUserPermMapping';

interface RuntimeConfigProps {
  activeTab: string;
  defaultTab: string;
  routePrefix: string;
  configTagFilter: string[];
  fetchRuntimeConfigs: () => void;
  setRuntimeConfig: (key: string, value: string, scope?: string) => void;
  deleteRunTimeConfig: (key: string, scope?: string) => void;
  resetRuntimeConfigs: () => void;
}

export const RuntimeConfig: FC<RuntimeConfigProps> = ({
  activeTab,
  defaultTab,
  routePrefix,
  configTagFilter,
  fetchRuntimeConfigs,
  setRuntimeConfig,
  deleteRunTimeConfig,
  resetRuntimeConfigs
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <YBTabsPanel
        activeTab={activeTab}
        defaultTab={defaultTab}
        routePrefix={routePrefix}
        id="global-config-tab-panel"
        className="config-tabs"
      >
        <Tab
          eventKey="global-config"
          title={t('admin.advanced.globalConfig.GlobalConfigTitle')}
          unmountOnExit
        >
          <GlobalRuntimeConfig
            setRuntimeConfig={setRuntimeConfig}
            deleteRunTimeConfig={deleteRunTimeConfig}
            fetchRuntimeConfigs={fetchRuntimeConfigs}
            resetRuntimeConfigs={resetRuntimeConfigs}
            configTagFilter={configTagFilter}
          />
        </Tab>

        <Tab
          eventKey="customer-config"
          title={t('admin.advanced.globalConfig.CustomerConfigTitle')}
          unmountOnExit
        >
          <RbacValidator
            accessRequiredOn={ApiPermissionMap.GET_RUNTIME_CONFIG_BY_SCOPE}
            overrideStyle={{ marginTop: '50px' }}
          >
            <CustomerRuntimeConfig
              setRuntimeConfig={setRuntimeConfig}
              deleteRunTimeConfig={deleteRunTimeConfig}
              fetchRuntimeConfigs={fetchRuntimeConfigs}
              resetRuntimeConfigs={resetRuntimeConfigs}
              configTagFilter={configTagFilter}
            />
          </RbacValidator>
        </Tab>

        <Tab
          eventKey="universe-config"
          title={t('admin.advanced.globalConfig.UniverseConfigTitle')}
          unmountOnExit
        >
          <RbacValidator
            customValidateFunction={(perms) => {
              const universeWithReadPerm = perms.filter((p) => {
                return p.resourceType === Resource.UNIVERSE && p.actions.includes(Action.READ);
              });
              return universeWithReadPerm.length !== 0;
            }}
            overrideStyle={{ marginTop: '150px' }}
          >
            <UniverseRuntimeConfig
              setRuntimeConfig={setRuntimeConfig}
              deleteRunTimeConfig={deleteRunTimeConfig}
              fetchRuntimeConfigs={fetchRuntimeConfigs}
              resetRuntimeConfigs={resetRuntimeConfigs}
              configTagFilter={configTagFilter}
            />
          </RbacValidator>
        </Tab>

        <Tab
          eventKey="provider-config"
          title={t('admin.advanced.globalConfig.ProviderConfigTitle')}
          unmountOnExit
        >
          <RbacValidator
            accessRequiredOn={ApiPermissionMap.GET_RUNTIME_CONFIG_BY_SCOPE}
            overrideStyle={{ marginTop: '150px' }}
          >
            <ProviderRuntimeConfig
              setRuntimeConfig={setRuntimeConfig}
              deleteRunTimeConfig={deleteRunTimeConfig}
              fetchRuntimeConfigs={fetchRuntimeConfigs}
              resetRuntimeConfigs={resetRuntimeConfigs}
              configTagFilter={configTagFilter}
            />
          </RbacValidator>
        </Tab>
      </YBTabsPanel>
    </div>
  );
};
