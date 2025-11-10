import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cargos() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Cargos e Ministérios</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie cargos e ministérios
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Cargo
        </Button>
      </div>
      <div className="text-center py-12 text-muted-foreground">
        Em desenvolvimento...
      </div>
    </div>
  );
}
