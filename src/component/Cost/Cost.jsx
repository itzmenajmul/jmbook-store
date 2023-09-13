
const Cost = () => {
    return (
        <div className="space-y-4" >
           <h1 className="text-4xl font-semibold"> Your Products : 0</h1>
           {/* show the cart title in numbaring */}
           <h3 className="text-3xl text-center">Total Price : 1220 ৳</h3>
           <p className="text-2xl mb-2 text-center">Save Money: <span className="line-through text-red-600">355</span> ৳</p>

           <p className="text-2xl border-t-2 text-center">Payment : <span className="font-semibold">120</span> ৳</p>
        </div>
    );
};

export default Cost;