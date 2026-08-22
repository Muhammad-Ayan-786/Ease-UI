import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";

const NavbarPage = () => {
  const usageCode = `import ComponentDemo from "../ComponentsDemo";
      <Navbar />

  `;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>
        <p className="text-gray-600 text-lg">
          A responsive navigation bar that provides clean and intuitive site navigation.
        </p>
      </div>

      <ComponentDemo code={usageCode}>
        <Navbar />
      </ComponentDemo>
    </div>
  );
};

export default NavbarPage;
