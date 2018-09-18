import  React  from  'react';
import './CartTotal.css';

function  CartTotal({  items  }) {
  // console.log("hi")
    let  totalAmt  =  0;
    let  totalItems  =  0;
    items.map(item  =>  {
        console.log(item);
        for  (var  count  =  1;  count  <=  item.count;  count++) {
            totalAmt  =  totalAmt  +  item.price;
        }
         totalItems  =  totalItems  +  1;
    })
    console.log(totalAmt)
    return  (
        <div  className="totalAmtLayout">
            <br  /><br  />
            {totalItems} Item(s),   Total: ${totalAmt}
        </div>
    );
}
export  default  CartTotal;

