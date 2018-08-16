import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tirupati'
})
export class TirupatiPipe implements PipeTransform
 {
   i:number;
   l:any;
   b:any;
   c:any;
   a:any="";
   f:any;

  transform(value: any): any{
    let image="";
    if(value)
    {
        //console.log("image found ");
        image=value.charAt(0).toUpperCase();
        //image=value.toLocaleUpperCase();
      
        //console.log(image);
       for ( this.i = 0; this.i<value.length; this.i++)
          {
            
              this.l = value.charAt(this.i);
              if (this.l == ' ' )
              {
                
                  //console.log("Space at " +this.i);
                  this.b=value.charAt(this.i+1).toUpperCase();

                  //console.log(this.b);

                  this.c=this.i+2;
                  this.a=this.a+" "+this.b;
              //console.log(this.a);
              }
          }
          this.f=(value.substr(this.c));

          
    }
   
    return image+this.a+this.f;
}
}
