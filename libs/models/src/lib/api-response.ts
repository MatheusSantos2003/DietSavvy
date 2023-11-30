export interface ApiResponse<T> {

  message?: string;
  success: boolean;
  result?: T;
  error?: any;
  statusCode: number;

}
