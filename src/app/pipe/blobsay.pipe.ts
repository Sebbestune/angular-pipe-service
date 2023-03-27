import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blobsay'
})
export class BlobsayPipe implements PipeTransform {

  transform(value: string): string {
    return "(ˆ.ˆ)<(" + value + ")";
  }

}
