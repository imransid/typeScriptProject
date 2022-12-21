# Getting Started with React-TypeScript App with Redux & Tailwind CSS

## How To Run This Project

Run `npm start`
Project will be launch here : [http://localhost:3000](http://localhost:3420)

## Description of Folder Structure

```text
src
|
|-- api-client (axios setup and intercepting related)
|
|-- components (all tsx files i.e. components - layouts,screens,pages,header,footer,)
|
|-- environment (production or staging related configuration)
|
|-- interface (data-type definition of state/different objects)
|
|-- redux-store (redux setup - epic, reducer, store)
|
|-- service (api call to backend services)
|
|-- utils (helper-functions, constants are here)
```

## Description of Component Rendering Hierarchy

```text
                     index.html
                         |
                         |
                      index.tsx
                         |
                         |
                       App.tsx
                         |
                         |
                   MainLayout.tsx
(MainLayout renders differnt screen-component as {children}
      according to route setup | screen-component
        renders sceen specific page-components)
                         |
                         |
        ----------------------------------
        |                |               |
HeaderComponent.tsx  {children} FooterComponent.tsx
```

## How to Create a Similar Project By Yourself

### Step-1: Command for Creating TypeScript-React App

```
npx create-react-app your-app-name --template typescript
```
