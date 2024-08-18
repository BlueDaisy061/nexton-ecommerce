import { FilterCategories } from '../ui/filter-categories';
import { FilterPriceRange } from '../ui/filter-price-range';

export default function ShopPage() {
  return (
    <div className="pt-[4.5rem]">
      <div className="lg:flex lg:mx-[4.5rem] lg:mt-10 lg:mb-20">
        <div className="lg:min-w-64">
          <FilterCategories />
          <hr className="bg-body-text opacity-15 my-10" />
          <FilterPriceRange />
          <hr className="bg-body-text opacity-15 my-10" />
        </div>
      </div>
    </div>
  );
}
