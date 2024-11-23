# Dropdown с React.Context

Возможно, такой подход покажется более сложным. Цель такого изменения – предоставить гибкость и простоту **в местах использования** компонента Dropdown.

Сравните:

```jsx
<DropdownNoContext
  title="Dropdown 🔍"
  options={[
    { label: '1', value: 'id_1' },
    { label: '2', value: 'id_2', variant: 'red' },
  ]}
  onOptionClick={(value) => setLastOption(value)}
/>
```

В этом случае, каждый объект внутри `options` придется расширять, если отображать `label` нужно будет по-другому.

В случае использования `React.Context`:

```jsx
<Dropdown title="Dropdown Context 🔍" onOptionClick={(value) => setLastOption(value)}>
  <Dropdown.TextOption value="id_1">1</Dropdown.TextOption>
  <Dropdown.RedTextOption value="id_2">2</Dropdown.RedTextOption>
  <Dropdown title="Inner Dropdown 🔍">
    <Dropdown.TextOption value="inner_id_1">inner option</Dropdown.TextOption>
  </Dropdown>
</Dropdown>
```

В данном подходе каждая опция явно описана и, при необходимости, мы можем добавить еще один вариант опции, никак не задевая другие варианты, чтобы отобразить что-нибудь по-другому. Как бонус, мы теперь можем вкладывать `Dropdown` в `Dropdown`, что иногда может быть полезно.
