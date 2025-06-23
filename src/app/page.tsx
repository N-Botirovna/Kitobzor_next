import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4 bg-slate-400 rounded-2xl p-4 border">My App</h1>
      <Button className="bg-slate-400 rounded-2xl p-4">Salom, Button!</Button>
    </div>
  );
}

