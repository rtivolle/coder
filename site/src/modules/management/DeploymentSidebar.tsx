import type { FC } from "react";
import { useAuthenticated } from "#/hooks/useAuthenticated";
import { useDashboard } from "#/modules/dashboard/useDashboard";
import { DeploymentSidebarView } from "./DeploymentSidebarView";

/**
 * A sidebar for deployment settings.
 */
export const DeploymentSidebar: FC = () => {
	const { permissions } = useAuthenticated();
	const { showOrganizations, experiments, buildInfo } = useDashboard();

	return (
		<DeploymentSidebarView
			permissions={permissions}
			showOrganizations={showOrganizations}
			experiments={experiments}
			buildInfo={buildInfo}
		/>
	);
};
