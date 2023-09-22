import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

export function Sidebar({ className }: any) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Categorias
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start ">
              Pulseiras
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Anéis
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Brincos
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Materiais
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Ouro
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Prata
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Foleado a Ouro
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Foleado a Prata
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
