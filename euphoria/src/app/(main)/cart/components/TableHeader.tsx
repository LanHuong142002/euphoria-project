export const TableHeader = () => (
  <div
    className="bg-background-secondary text-text-tertiary py-7"
    role="rowgroup"
  >
    <div className="container mx-auto">
      <div
        className="grid grid-cols-6 gap-4 text-sm font-medium px-4 md:px-0"
        role="row"
        aria-rowindex={1}
      >
        <div
          className="col-span-4 md:col-span-2"
          role="columnheader"
          aria-colindex={1}
        >
          PRODUCT DETAILS
        </div>
        <div
          className="text-center hidden md:block"
          role="columnheader"
          aria-colindex={2}
        >
          PRICE
        </div>
        <div
          className="text-center hidden md:block"
          role="columnheader"
          aria-colindex={3}
        >
          QUANTITY
        </div>
        <div
          className="text-center hidden md:block"
          role="columnheader"
          aria-colindex={4}
        >
          SUBTOTAL
        </div>
        <div
          className="text-end hidden md:block"
          role="columnheader"
          aria-colindex={5}
        >
          ACTION
        </div>
      </div>
    </div>
  </div>
);
