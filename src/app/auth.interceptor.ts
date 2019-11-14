import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operator';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

    /**
     *
     */
    constructor(private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!!localStorage.getItem("token")) {

            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'token ' + "123");
            });

            return next.handle(clonedReq).pipe(
                tap(succ => { },
                    err => {
                        if (err.status = 401) {
                            this.router.navigateByUrl("/login");
                        }
                    })
            );
        } else {
            return next.handle(req.clone());
        }
    }

}
