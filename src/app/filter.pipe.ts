import { PipeTransform,Pipe } from "@angular/core";

@Pipe({
    name:'filterPipe'
})

export class FilterPipe implements PipeTransform{
    // transform(value: any[], filterText: string) {
     
    //     let returnValue:any[]=value.filter(p=>p.name.toLowerCase().indexOf(filterText.toLowerCase())!==-1)
    //     console.log(returnValue)
    //     return returnValue;
    // }

    transform(value: any[],filterText:string) {
        if(!filterText){
            return value
        }
        const returnValue=value.filter(p=>{
            const name=p.name.toLowerCase().includes(filterText);
            // console.log("name",name)
            const lastName=p.lastName.toLowerCase().includes(filterText);
            
            return name +lastName
        })
        console.log(returnValue);
        return returnValue;
        
    }

}