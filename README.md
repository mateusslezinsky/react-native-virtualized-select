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
      inputPlaceholder="Search"
      value={selectedItem}
      onSelect={setSelectedItem}
      onClear={() => setSelectedItem(initialValue)}
      data={data}
      fallbackOnNotFound="No items were found!"

      // Optional Props
    />
)
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
