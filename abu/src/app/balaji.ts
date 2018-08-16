import {Pipe} from '@angular/core';

@Pipe({name:"govinda"})
export class Balaji 
{
    transform(value: string, fallback: string): string{
        let image="";
        if(value)
        {
            image=value;
        }
        else{
            image=fallback;
        }
        return image;
    }
}

