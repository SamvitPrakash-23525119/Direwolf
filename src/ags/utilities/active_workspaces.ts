export default function activeWorkspaces(activeWorkspaces: number[], currentId: number): string {
    const states = ['workspace-button-active', 'workspace-button-active-start', 'workspace-button-active-center', 'workspace-button-active-end'];

    if (currentId-1 in activeWorkspaces && currentId+1 in activeWorkspaces) {
        return states[2];
    } else if (currentId-1 in activeWorkspaces) {
        return states[1];
    } else if (currentId+1 in activeWorkspaces) {
        return states[3];
    }else if (currentId in activeWorkspaces) {
        return states[0];
    }

    return 'workspace-button';

}