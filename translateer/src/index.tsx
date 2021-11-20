import { List } from "@raycast/api";
import { useState, useRef } from "react";
import { fetchResult } from "./api";

export default function ResultList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>({});
  const cancel = useRef<AbortController>(new AbortController());

  const onSearchTextChange = (text: string) => {
    cancel.current.abort();
    cancel.current = new AbortController();
    setIsLoading(true);

    fetchResult(text, cancel.current.signal)
      .then((res) => {
        setResult(res ?? {});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <List
      isLoading={isLoading}
      searchBarPlaceholder="Translate text..."
      onSearchTextChange={onSearchTextChange}
      throttle
    >
      {result.result && (
        <List.Section title="Result">
          <List.Item title={result.result} />
        </List.Section>
      )}

      {result.translations && <Translations translations={result.translations} />}

      {result.definitions && <Definitions definitions={result.definitions} />}

      {result.examples && <Examples examples={result.examples} />}
    </List>
  );
}

function Translations({ translations }: { translations: any }) {
  // flatten into a list
  const items = Object.keys(translations).reduce(
    (acc, key) =>
      acc.concat(
        translations[key].map((item: any) => {
          item.pos = key;
          return item;
        })
      ),
    [] as any[]
  );

  return (
    <List.Section title="Translations">
      {items.map((item, i) => (
        <List.Item
          key={i}
          title={item.translation + " (" + item.pos + ")"}
          subtitle={item.reverseTranslations.join(", ")}
          accessoryTitle={item.frequency}
        />
      ))}
    </List.Section>
  );
}

function Definitions({ definitions }: { definitions: any }) {
  const items = Object.keys(definitions).reduce(
    (acc, key) =>
      acc.concat(
        definitions[key].map((item: any) => {
          item.pos = key;
          return item;
        })
      ),
    [] as any[]
  );

  return (
    <List.Section title="Definitions">
      {items.map((item, i) => (
        <List.Item key={i} title={item.definition} subtitle={item.example ?? ""} accessoryTitle={item.pos} />
      ))}
    </List.Section>
  );
}

function Examples({ examples }: { examples: any }) {
  return (
    <List.Section title="Examples">
      {examples.map((text: string) => (
        <List.Item key={text} title={text} />
      ))}
    </List.Section>
  );
}
