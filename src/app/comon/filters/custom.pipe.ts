import { Pipe, PipeTransform } from '@angular/core'; 
 
@Pipe({
    name:'htmlToPlaintext'
})
export class htmlToPlaintextPipe implements PipeTransform {
    transform(value:string, pretext:string): string{
        return value;
    }
}
