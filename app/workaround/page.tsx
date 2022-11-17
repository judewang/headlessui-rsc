import { Tab, Group, List, Panels, Panel } from "./Tab";

export default function Page() {
  return (
    <section className="mx-auto max-w-2xl">
      <h2 className="text-center text-2xl">This can work</h2>
      <Group>
        <List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </List>
        <Panels>
          <Panel>
            <p>Tab 1 content</p>
          </Panel>
          <Panel>
            <p>Tab 2 content</p>
          </Panel>
          <Panel>
            <p>Tab 3 content</p>
          </Panel>
        </Panels>
      </Group>
    </section>
  );
}
