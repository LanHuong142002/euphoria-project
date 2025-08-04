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
        <BreadcrumbLink href={ROUTES.HOME}>Shop</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>{categoryName}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
