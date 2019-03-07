# React Redux with Sagas

Let's add Sagas to our React Redux fruit basket.

## Setup

- `npm install`
- `npm run server`
- `npm run client`

## Task List

> NOTE: Start by taking inventory of the existing code. Part of the work for setting up sagas has been done for you. All of the server side code has already been completed.

- [x] Setup Sagas in the `index.js`
- [ ] Create a Saga that GETs fruit from the server
- [ ] Replace all calls to GET fruit (FruitItem.js, FruitList.js, FruitSelector.js) with a call to dispatch your Saga
- [ ] Create a Saga that POSTs new fruit to the server
- [ ] Replace the call to add a fruit with a call to dispatch your Saga

### Stretch 

- [ ] Create a Saga for DELETE
- [ ] Improve styling on the page

## Sagas Notes

Sagas listen, like Reducers, for actions. Sagas will intercept actions **BEFORE** the reducer. Sagas can do many things. Common things are dispatching other actions, and triggering HTTP calls. Usually, the end of the saga dispatches a new action that sends info to the reducer to be saved in the store.

### Why Sagas?

Reducers **CAN NOT** make async requests. All changes withing a reducer happen immediately. This prevents us from being able to make API requests from our reducers.

As our application grows, we'll be making duplicate API requests in various components. We could move all of these to our `App.js` and pass them via props but that will quickly get difficult to manage. 
