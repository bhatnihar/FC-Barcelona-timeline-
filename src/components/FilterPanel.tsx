interface FilterPanelProps {
  onFilter: (year: number | null) => void;
}

function FilterPanel({ onFilter }: FilterPanelProps) {
  return (
    <div className="filter-panel">
      <button onClick={() => onFilter(null)}>All</button>
      <button onClick={() => onFilter(2000)}>2000</button>
      <button onClick={() => onFilter(2010)}>2010</button>
      <button onClick={() => onFilter(2020)}>2020</button>
    </div>
  );
}

export default FilterPanel;
