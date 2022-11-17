import { Tab } from "@headlessui/react";

export default function Page() {
  return (
    <section className="mx-auto max-w-2xl">
      <h2 className="text-center text-2xl">This will get Failed to compile</h2>
      <Tab.Group>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <p>Tab 1 content</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>Tab 2 content</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>Tab 3 content</p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
