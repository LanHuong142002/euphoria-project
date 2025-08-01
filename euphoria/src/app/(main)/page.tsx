import { Filter } from './components/Filter';

export default function MainPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex gap-6">
        <Filter />
      </div>
    </div>
  );
}
