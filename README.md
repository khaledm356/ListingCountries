# Countries App

The Countries component is a React component that fetches and displays a list of countries from an API. It allows users to search for a specific country by name.

## List Component

The `List` component is a reusable React component used to render a list of items. Each item in the list is represented by a label and an ID.

### Usage

### Props

- **list**: An array of objects representing the items to be rendered in the list. Each object should have a `label` property for the item's display text and an `id` property for the item's unique identifier.

### Example

```jsx
import React from 'react';
import { List } from './List';

const MyComponent = () => {
  const items = [
    { label: 'Item 1', id: '1' },
    { label: 'Item 2', id: '2' },
    { label: 'Item 3', id: '3' }
  ];

  return (
    <List list={items} />
  );
};
```

In this example, the `List` component is used to render a list of items defined in the `items` array.

## Props

### list

- **Type**: Array
- **Description**: An array of objects representing the items to be rendered in the list.
- **Properties**:
  - **label**: The display text for the item.
  - **id**: The unique identifier for the item.

---

## Input Component

The `Input` component is a reusable React component used to render an input field.

## Usage

### Props

- **value**: The current value of the input field.
- **placeholder**: The placeholder text to display when the input field is empty.
- **onChange**: A function to call when the value of the input field changes.

### Example

```jsx
import React, { useState } from 'react';
import { Input } from './Input';

const MyComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Input value={searchText} placeholder="Enter search text" onChange={handleInputChange} />
  );
};
```

In this example, the `Input` component is used to render an input field for searching.

## Props

### value

- **Type**: String
- **Description**: The current value of the input field.

### placeholder

- **Type**: String
- **Description**: The placeholder text to display when the input field is empty.

### onChange

- **Type**: Function
- **Description**: A function to call when the value of the input field changes. It receives an event object as a parameter.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:

git clone https://github.com/yourusername/countries-app.git


2. Navigate into the project directory:

cd countries-app


3. Install dependencies:


### Running the Application

To start the development server and run the application:

The application should now be running at `http://localhost:3000`.

## Usage

- Enter a country name in the input field to search for countries.
- The list will update dynamically as you type.
- Click on a country name to view more details.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js

## Author

- [Khaled Zaher](https://github.com/khaledm356)

