export const TableHeader = () => (
  <div className="bg-background-secondary text-text-tertiary py-7">
    <div className="container mx-auto">
      <div className="grid grid-cols-6 gap-4 text-sm font-medium px-4 md:px-0">
        <div className="col-span-4 md:col-span-2">PRODUCT DETAILS</div>
        <div className="text-center hidden md:block">PRICE</div>
        <div className="text-center hidden md:block">QUANTITY</div>
        <div className="text-center hidden md:block">SUBTOTAL</div>
        <div className="text-end hidden md:block">ACTION</div>
      </div>
    </div>
  </div>
);
