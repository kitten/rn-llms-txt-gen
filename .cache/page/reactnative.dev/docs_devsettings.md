On this page

# DevSettings

The `DevSettings` module exposes methods for customizing settings for developers in development.

## Reference

## Methods

### `addMenuItem()`

```
static addMenuItem(title: string, handler: () => any);
```

Add a custom menu item to the Dev Menu.

**Parameters:**

|Name|Type|
|-|-|
|titleRequired|string|
|handlerRequired|function|

**Example:**

```
DevSettings.addMenuItem('Show Secret Dev Screen', () => {
  Alert.alert('Showing secret dev screen!');
});
```

### `reload()`

```
static reload(reason?: string): void;
```

Reload the application. Can be invoked directly or on user interaction.

**Example:**

```
<Button title="Reload" onPress={() => DevSettings.reload()} />
```

* Methods

  * `addMenuItem()`
  * `reload()`
