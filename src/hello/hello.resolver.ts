import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {

    @Query(()=> String,{description:'documenbtat',name:'hello'})
    hello(): string{

        return'hallo'
    }
    @Query(()=> Float)
    getRandom():number{
        return Math.floor(Math.random()*100)
    }

     @Query(()=> Int ,{name:'toTen'})
    getRandomToTen(@Args('to',{nullable:true,type:()=>Int}) to:number=6):number{
        return Math.floor(Math.random()*10) *to
    }

    
}
