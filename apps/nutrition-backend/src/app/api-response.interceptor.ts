import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from  '@nutrition-app/models';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        const response = {
          statusCode: data.statusCode || context.switchToHttp().getResponse().statusCode,
          message: data.message,
          success: data.success,
          result: data.result,
          error: data.error
        };
        return response;
      })
    );
  }
}
