export interface EditableServerValues {
  serverIP: string;
  serverId?: string;
  isPerm?: boolean;
  termsAndConditions: boolean;
}

export interface Server {
  hostname: string;
  mapname: string;
  status: number;
}

export interface ServerValidationResponse {
  server: Server;
}
