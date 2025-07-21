import { getCategories } from "@/features/auth/api";
import { useQuery } from "@tanstack/react-query";
interface Category {
  id: number;
  name: string;
  picture: string;
}
interface ApiResponse {
  data?: {
    result: Category[];
  };
}

export default function TagHeader() {
  const { data, isLoading, error } = useQuery<ApiResponse>({
    queryKey: ["categories"],
    queryFn: () => getCategories(8, 0),
  });
  const categories : Category[] = data?.data?.result || []
  console.log(categories);
  
  return (
    <div className="bg-[#f2543f] border-white my-2 py-2">
  <div className="flex gap-6 px-4 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
    {categories.map((category) => (
      <div
        key={category.id}
        className="shrink-0 flex flex-col items-center space-y-2 cursor-pointer hover:opacity-90"
      >
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
          <img
            src={category.picture}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-white text-sm font-medium">{category.name}</span>
      </div>
    ))}
  </div>
</div>

  );
}
