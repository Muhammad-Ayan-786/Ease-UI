import PropsTable from "@/components/Personal/PropsTable"
import ComponentDemo from "../ComponentsDemo";
import Tooltip from "@/components/Tooltip/Tooltip";

type Props = {}

const TooltipPage = ({ }: Props) => {

  const usageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip content="Tooltip content" position="top" delay={200}>
  <button>Hover me</button>
</Tooltip>
  `

  const propsData = [
    {
      prop: "content",
      type: "string",
      default: "-",
      description: "The text shown inside the tooltip"
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Which side the tooltip appears on"
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "The element that triggers the tooltip on hover"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-gray-600 text-lg">
          A small, informative pop-up that appears when hovering over an element.
        </p>
      </div>


      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <Tooltip content="Tooltip content" position="top">
            <button>Hover me</button>
          </Tooltip>
        </ComponentDemo>
      </section>


      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  )
}

export default TooltipPage