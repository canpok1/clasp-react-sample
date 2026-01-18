declare namespace google {
  namespace script {
    interface Runner {
      withSuccessHandler<T>(callback: (result: T) => void): Runner;
      withFailureHandler(callback: (error: Error) => void): Runner;
      withUserObject(object: unknown): Runner;
      getMessage(): void;
    }
    const run: Runner;
  }
}
