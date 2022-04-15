export abstract class Server {
  abstract up<P, R>(params: P): Promise<R>;

  abstract down<P, R>(params: P): Promise<R>;

  abstract status<P, R>(params: P): Promise<R>;
}
