export const carts = [];

export function addToCart(productId){
    let match;
        carts.forEach((val)=>{
            if(productId === val.productId){
                match = val;
            }
        });
        if (match){
            match.quantity++;
        }
        else{
            carts.push(
                {
                    productId,
                    quantity: 1
                }
            );
        }
}