import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SampleResponse } from './model/sample-response';
import { Sample } from '../../domain/sample';

@Injectable()
export class SampleService {

    constructor( private http: HttpClient ) { }

    list(): Observable<Sample[]> {
        return this.http
            .get<SampleResponse[]>( '/service/api/sample' )
            .map(( values: SampleResponse[] ) =>
                values.map(( value: SampleResponse ) =>
                    new Sample( value.id, value.name, value.value ) ) );
    }

}
