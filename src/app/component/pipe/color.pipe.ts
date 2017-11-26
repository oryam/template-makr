import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
    name: 'color'
} )
export class ColorPipe implements PipeTransform {

    transform( value: boolean ): string {
        return value ? 'red' : 'green';
    }

}
