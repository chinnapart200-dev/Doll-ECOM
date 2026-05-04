export function QuantitySelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (next: number) => void;
}) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-full border border-black/10 bg-white">
      <button
        type="button"
        className="px-4 py-2 text-sm font-bold"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        -
      </button>
      <span className="min-w-10 px-3 text-center text-sm font-bold">{value}</span>
      <button
        type="button"
        className="px-4 py-2 text-sm font-bold"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
