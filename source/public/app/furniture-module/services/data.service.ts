import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    show(some: string) {
        console.log(some);
    }
}