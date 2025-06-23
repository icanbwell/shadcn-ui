import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh items-center justify-center gap-4">
      <Button variant="default">Click me</Button>
      <Button variant="secondary" size="lg">
        Click me
      </Button>
      <Button className="bg-secondary text-white text-md">
        Primary Button
      </Button>
      <Button variant="outline" size="sm">
        Click me
      </Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="link">Click me</Button>
    </div>
  );
}

export default App;
