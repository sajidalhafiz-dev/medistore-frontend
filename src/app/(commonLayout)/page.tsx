import { ComponentExample } from "@/components/component-example";
import { Hero } from "@/components/modules/Home/hero";
import { Medicines } from "@/components/modules/Home/medicine";
import { Overview } from "@/components/modules/Home/overview";
import { Button } from "@/components/ui/button";
import { Medicine } from "@hugeicons/core-free-icons";

// export default function Page() {
//   return <ComponentExample />;
// }

export default function Home() {
  return (
    <div>
      <Hero />
      <Overview />
      <Medicines />

    </div>
  );
}
