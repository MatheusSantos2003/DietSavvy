export interface ApiResponse<T> {

  message?: string;
  sucess: boolean;
  result?: T;
  error?: any;
  statusCode: number;

}
