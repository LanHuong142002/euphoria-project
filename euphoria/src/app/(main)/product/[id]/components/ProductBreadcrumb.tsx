// Constants
import { ROUTES } from '@/constants';

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/components/common/Breadcrumb';

interface ProductBreadcrumbProps {
  categoryName: string;
}

export const ProductBreadcrumb = ({ categoryName }: ProductBreadcrumbProps) => (
  <Breadcrumb className="mb-4 lg:mb-8">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={ROUTES.HOME}
          aria-label="Navigate to Shop homepage"
        >
          Shop
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage aria-label={`Current category: ${categoryName}`}>
          {categoryName}
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
