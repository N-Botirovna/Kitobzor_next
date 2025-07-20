// components/header/HeaderCategories.tsx

const categories = [
    "Fantasy", "Romance", "Adventure", "Detective", "Science Fiction",
    "Biography", "Poetry", "History", "Philosophy", "Tag1"
  ];
  
  export default function TagHeader() {
    return (
      <div className="bg-[#f2543f] border-white flex justify-center my-2 py-2">
        <div className="flex gap-6 py-2 overflow-x-auto justify-around w-full px-4 whitespace-nowrap">
          {categories.map((tag, idx) => (
            <div
              key={idx}
              className="text-white text-sm font-medium cursor-pointer hover:opacity-90"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
