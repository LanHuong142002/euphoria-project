import { render, screen } from '@testing-library/react';

// Components
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '..';

// Common test wrapper component
const HomeBreadcrumb = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

describe('Breadcrumb component', () => {
  test('Should render breadcrumb with correct navigation role', () => {
    render(<HomeBreadcrumb />);
    const nav = screen.getByRole('navigation');

    expect(nav).toBeDefined();
    expect(nav).toHaveAttribute('aria-label', 'breadcrumb');
  });

  test('Should render breadcrumb list as ordered list', () => {
    render(<HomeBreadcrumb />);
    const list = screen.getByRole('list');

    expect(list.tagName).toBe('OL');
  });

  test('Should render breadcrumb items as list items', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );
    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(2);
  });

  test('Should render breadcrumb links correctly', () => {
    render(<HomeBreadcrumb />);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveTextContent('Home');
  });

  test('Should render breadcrumb page with correct attributes', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );
    const page = screen.getByRole('link');

    expect(page).toHaveAttribute('aria-disabled', 'true');
    expect(page).toHaveAttribute('aria-current', 'page');
    expect(page).toHaveTextContent('Products');
  });

  test('Should render breadcrumb separator with correct attributes', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );
    const separator = screen.getByTestId('breadcrumb-separator');

    expect(separator).toHaveAttribute('aria-hidden', 'true');
  });

  test('Should render custom separator text', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('/')).toBeDefined();
  });

  test('Should render breadcrumb ellipsis with correct attributes', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );
    const ellipsis = screen.getByTestId('breadcrumb-ellipsis');

    expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByText('More')).toBeDefined();
  });

  test('Should render complete breadcrumb navigation', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Electronics</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.getByText('Products')).toBeDefined();
    expect(screen.getByText('Electronics')).toBeDefined();
  });

  test('Should render breadcrumb with ellipsis in middle', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.getByText('More')).toBeDefined();
    expect(screen.getByText('Products')).toBeDefined();
  });
});
