export interface ChecklistItem {
  completed: boolean;
  task: string;
}

export interface WorkOrder {
  assetId: number;
  assignedUserIds: number[];
  checklist: ChecklistItem[];
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
}

export interface CreateWorkOrderInput {
  assetId: number;
  assignedUserIds: number[];
  checklist: ChecklistItem[];
  description: string;
  priority: string;
  title: string;
}

export interface UpdateWorkOrderInput {
  assetId?: number;
  assignedUserIds?: number[];
  checklist?: ChecklistItem[];
  description?: string;
  priority?: string;
  status?: string;
  title?: string;
}
