import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
    public transform(value: any, param: any) {
        if (!param) {
            param = "/img/avatar.png";
          }
          if (!value) {
            return param;
          }
          return value;
  }
}
  