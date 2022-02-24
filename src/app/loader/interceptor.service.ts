import { HttpEvent, 
  HttpHandler, 
  HttpInterceptor, 
  HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs'
import { finalize } from 'rxjs/operators';
// import { Observable } from 'rxjs/dist/types/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  constructor(public loaderService:LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    console.log("Line 17")
    this.loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        ()=>{
          console.log("Finalize")
          this.loaderService.isLoading.next(false);
        })
    );
    // throw new Error('Method not implemented.');
  }
}
