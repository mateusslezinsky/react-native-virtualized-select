# react-native-virtualized-select

A virtualized combo box made for large lists.

## Installation

```sh
npm install react-native-virtualized-select
```

## Usage

```js
import VirtualizedCombo from 'react-native-virtualized-select';

// ...
return (
    <VirtualizedCombo
      // Required Props
      labelText="Select an item"
      value={selectedItem}
      onSelect={setSelectedItem}
      data={data}

      // Optional Props
      shouldDisplayInComboBox="key"
      fallbackOnNotFound="No items were found!"
      onClear={() => setSelectedItem(null)}
      inputPlaceholder="Search here"

      // For theming see the section "Customizing"
      theme={{labelStyle: {color: 'red'}}}
/>
)
```

## Customizing

For customizing each component section you can pass a theme object that can contain (but not limited to) the following properties:

```js
theme={
  labelStyle: {
    color: 'black',
    fontWeight: '600',
  },
  inputStyle: {
    backgroundColor: '#000',
  },
  comboStyle: {
    backgroundColor: '#000',
    marginTop: 10,
  },
  searchButtonStyle: {
    backgroundColor: '#a5b4a7',
  },
  clearButtonStyle: {
    backgroundColor: '#a5b4a7',
  },
  outerContainerStyle: {
    gap: 10
  },
  searchButtonIconSize: 20,
  clearButtonIconSize: 20,
  searchButtonIconColor: '#444',
  clearButtonIconColor: 'red',
}
```

As shown above, the properties follow the standard React Native format for styling components.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
