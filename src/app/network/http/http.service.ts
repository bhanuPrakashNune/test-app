import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { IAjaxResponse } from './ajaxresponse';
import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'X-Auth-Token': '6762f97d76994839b28307d65e54f35c'
  }),
  observe: 'response' as 'response'
}

export class HttpService {
    constructor(private http: HttpClient) {}

    httpGet(url: string): Promise<IAjaxResponse> {
        return new Promise((resolve, reject) => {
            this.http.get(url,
                    httpOptions)
                .toPromise()
                .then((res: HttpResponse<any>) => {
                    this.handleHttpResponse(res, resolve, reject);
                })
                .catch((err: HttpErrorResponse) => {
                    this.handleHttpErrorResponse(err, reject);
                });
        });
    }

    httpDelete(url: string): Promise<IAjaxResponse> {
        return new Promise((resolve, reject) => {
            this.http.delete(url,
                    httpOptions)
                .toPromise()
                .then((res: HttpResponse<any>) => {
                    this.handleHttpResponse(res, resolve, reject);
                })
                .catch((err: HttpErrorResponse) => {
                    this.handleHttpErrorResponse(err, reject);
                });
        });
    }

    httpPost(url: string, data: any = null): Promise< IAjaxResponse > {
        return new Promise((resolve, reject) => {
            this.http.post(url,
                data,
                httpOptions)
                .toPromise()
                .then((res: HttpResponse<any>) => {
                    this.handleHttpResponse(res, resolve, reject);
                })
                .catch((err: HttpErrorResponse) => {
                    this.handleHttpErrorResponse(err, reject);
                });
        });
    }

    httpPut(url: string, data: any): Promise<IAjaxResponse> {
        return new Promise((resolve, reject) => {
            this.http.put(url,
                    data,
                    httpOptions)
                .toPromise()
                .then((res: HttpResponse<any>) => {
                    this.handleHttpResponse(res, resolve, reject);
                })
                .catch((err: HttpErrorResponse) => {
                    this.handleHttpErrorResponse(err, reject);
                });
        });
    }

    private handleHttpResponse(res: HttpResponse<any>, resolve: any, reject: any) {
        let result: IAjaxResponse = {
            status: res.status
        };

        if (res.ok) {
            result.data = res.body;
            resolve(result);
        } else {
            result.error = res.body;
            reject(result);
        }
    }

    private handleHttpErrorResponse(err: HttpErrorResponse, reject: any) {
        let result: IAjaxResponse = {
            status: err.status,
            error: err.error || err.message || err
        };

        reject(result);
    }
}
