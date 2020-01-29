export type ServiceDefinition = {
  [x: string]: MethodDefinition;
};

export type MethodDefinition = {
  [x: string]: StringConstructor | NumberConstructor;
};

export type ServiceObject<T extends ServiceDefinition> = {
  [P in keyof T]: ServiceMethod<T[P]>
};

export type ServiceMethod<T extends MethodDefinition> = {} extends T
  ? () => boolean
  : (payload: RequestPayload<T>) => boolean;

export type RequestPayload<T extends MethodDefinition> = {} extends T
  ? undefined
  : { [P in keyof T]: TypeFromConstructor<T[P]> };

export type TypeFromConstructor<T> = T extends StringConstructor
  ? string
  : T extends NumberConstructor ? number : any;

export type RequestHandler<T extends ServiceDefinition> = (req: RequestObject<T>) => boolean;

export type RequestObject<T extends ServiceDefinition> = {
  [P in keyof T]: {
    message: P;
    payload: RequestPayload<T[P]>;
  }
}[keyof T];


function createService<S extends ServiceDefinition>(
  serviceDef: S,
  handler: RequestHandler<S>,
): ServiceObject<S> {
  const service = {} as any;

  for (const name in serviceDef) {
    service[name] = (payload: any) => handler({ message: name, payload });
  }

  return service as ServiceObject<S>;
}

const serviceDefinition = {
  open: { filename: String },
  insert: { pos: Number, text: String },
  delete: { pos: Number, len: Number },
  close: {},
};


const service = createService(serviceDefinition, req => {
  switch (req.message) {
    case 'open':
      break;
    case 'insert':
      req.payload
      break;
    default:
      // req.
      break;
  }

  return true;
});


service.close();
service.open({ filename: 'text.txt' });
