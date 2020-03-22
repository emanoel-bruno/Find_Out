const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.group(action.type);
  console.info('Dispatching', action);
  const result = next(action);
  console.log('Next state', store.getState());
  console.groupEnd();
  return result;
};

export default loggerMiddleware;
