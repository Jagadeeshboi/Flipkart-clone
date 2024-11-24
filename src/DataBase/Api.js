
export const ExportApi= async()=>{
            const req=await fetch("https://fakestoreapi.com/products");
            const res=await req.json();
            return res;
}